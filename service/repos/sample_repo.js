import { Connection, Ed25519Keypair, Transaction } from 'bigchaindb-driver'

// BigchainDB server instance or testnetwork (e.g. https://example.com/api/v1/)
const API_PATH = 'http://localhost:9984/api/v1/'
const conn = new Connection(API_PATH)

// Send the transaction off to BigchainDB
const postData = (patientKeySeed, assetdata, metadata) => {

    const conn = new Connection(API_PATH)

    const alice = new Ed25519Keypair(charlieSeed);
    const bob = new Ed25519Keypair(donaldSeed)

    // Construct a transaction payload
    const txCreateAliceSimple = Transaction.makeCreateTransaction(
        assetdata,
        metadata,

        // A transaction needs an output
        [Transaction.makeOutput(
            Transaction.makeEd25519Condition(alice.publicKey))
        ],
        alice.publicKey
    )

    // Sign the transaction with private keys of Alice to fulfill it
    const txCreateAliceSimpleSigned = Transaction.signTransaction(txCreateAliceSimple, alice.privateKey)

    conn.postTransactionCommit(txCreateAliceSimpleSigned)
        .then(retrievedTx => console.log('Transaction', retrievedTx.id, 'successfully posted.'))
        // With the postTransactionCommit if the response is correct, then the transaction
        // is valid and commited to a block

        // Transfer bicycle to Bob
        .then(() => {
            const txTransferBob = Transaction.makeTransferTransaction(
                // signedTx to transfer and output index
                [{ tx: txCreateAliceSimpleSigned, output_index: 0 }],
                [Transaction.makeOutput(Transaction.makeEd25519Condition(bob.publicKey))],
                // metadata
                { price: '100 euro' }
            )

            // Sign with alice's private key
            let txTransferBobSigned = Transaction.signTransaction(txTransferBob, alice.privateKey)
            console.log('Posting signed transaction: ', txTransferBobSigned)

            // Post with commit so transaction is validated and included in a block
            return conn.postTransactionCommit(txTransferBobSigned)
        })
        .then(tx => {
            console.log('Response from BDB server:', tx)
            console.log('Is Bob the owner?', tx['outputs'][0]['public_keys'][0] == bob.publicKey)
            console.log('Was Alice the previous owner?', tx['inputs'][0]['owners_before'][0] == alice.publicKey)
        })
        // Search for asset based on the serial number of the bicycle
        .then(() => conn.searchAssets('Bicycle Inc.'))
        .then(assets => console.log('Found assets with serial number Bicycle Inc.:', assets))
}

// Send the transaction off to BigchainDB
const postPatientData = (patientKeySeed, assetdata, metadata) => {
    const patientKey = new Ed25519Keypair(patientKeySeed);
    console.log('patientKey', patientKey.publicKey);

    // Construct a transaction payload
    const txCreatePatientAssetSimple = Transaction.makeCreateTransaction(
        assetdata,
        metadata,
        // A transaction needs an output
        [Transaction.makeOutput(
            Transaction.makeEd25519Condition(patientKey.publicKey))
        ],
        patientKey.publicKey
    )

    // Sign the transaction with private keys of Alice to fulfill it
    const txCreatePatientAssetSigned = Transaction.signTransaction(txCreatePatientAssetSimple, patientKey.privateKey)

    conn.postTransactionCommit(txCreatePatientAssetSigned)
        .then(retrievedTx => console.log('Transaction', retrievedTx.id, 'successfully posted.'))
        // With the postTransactionCommit if the response is correct, then the transaction
        // is valid and commited to a block                
        // Search for asset based on the serial number of the bicycle
        .then(() => conn.searchAssets('firstName'))
        .then(assets => console.log('Found assets with firstName.:', assets))
        .catch(error => console.log('Error', error))

    console.log('postTransactionCommit over')
}

export default { postData, postPatientData }