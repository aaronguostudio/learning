# First Network and Simple App
This is based on the fabric-samples/first-network
- ./byfn.sh generate
- ./byfn.sh up
- ./byfn.sh up -l node
- ./byfn.sh down


Start from here:
https://hyperledger-fabric.readthedocs.io/en/latest/build_network.html
Crypto Generator

## Key Concepts:
- unique root certificate (ca-cert)
- private key (keystore)
- public key (signcerts)

## Learning log
After learning simple network and build your first network, I know how to start the sample, some baisc API consuming and how the network looks like.

# Adding an Org to a Channel
## Build org3 manually
- cryptogen generate --config=./org3-crypto.yaml
- export FABRIC_CFG_PATH=$PWD && ../../bin/configtxgen -printOrg Org3MSP > ../channel-artifacts/org3.json

Start from Prepare the CLI Environment
