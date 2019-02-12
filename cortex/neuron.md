## RDP to qc3
- computer: qc3-mgmt
- username: prod-int\qcinstaller
- password: QC!nstall3r

## portainer
- http://qc3-docker:9000/   from http
    - username: admin
    - password: password
- dockerancher:9000/        from qc3

## K8s
- http://http://qc3-docker:5601/

## Decomp projects
First you need Neuron 7.0.0 branch
Transform serice:  https://git.cortex.net/microservices/transform-service

Node.js services:

Wfintake:  https://git.cortex.net/neuron/wfintakservice

Wfmanagement:  https://git.cortex.net/neuron/wfmanagement

Document engine: https://git.cortex.net/neuron/document-engine

Csv/xml parser: https://git.cortex.net/neuron/csv-xml-parser-service

Mapping service: https://git.cortex.net/neuron/mapping-service

Response generator: https://git.cortex.net/neuron/response-generation-service

Validation service: https://git.cortex.net/neuron/validation-service