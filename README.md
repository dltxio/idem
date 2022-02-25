# idem-website
Official Website for idem.com.au

## User Need: Establishing a digital identity that is transportable across exchanges.

Users who join a digital currency exchange must verify their identity through the KYC process. Authentication ensures the supplied  identification details correspond with the specific user of the system. The process is time consuming, both in terms of the length of time it takes the user to photograph and upload the required documentation, and in terms of the waiting period for the exchange to then verify the data, which can take upto a week. 

Further delay is caused by the high rates of failure experienced by users. Licenses get rejected for having too much glare, edges of a document not being visible and a host of other glitches. For users who are accustomed to the instantaneousness of digital environments, these delays are frustrating. This problem becomes exacerbated when users wish to join more than one exchange and despite having had their identity verified by their initial exchange, must go through this process each time. For the majority of digital currency users who frequently shop around for the best rates, specific tokens and other features unique to each exchange, there is a need for a more streamlined and seamless  verification process.

## Verifiable Presentation

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schema.org"
  ],
  "type": "VerifiablePresentation",
  "verifiableCredential": [{
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
    ],
    "type": ["VerifiableCredential", "NameCredential"],
    "issuer": "https://idem.com.au/",
    "issuanceDate": "2022-03-01T12:00:00Z",
    "expirationDate": "2023-03-01T12:00:00Z",
    "credentialSubject": {
        "givenName": "Ralph",
        "familyName": "Lavelle"
      }
    },
    "proof": {
      "type": "EcdsaSecp256k1Signature2019",
      "created": "2022-03-01T12:00:00Z",
      "proofPurpose": "assertionMethod",
      "verificationMethod": "https://idem.com.au",
      "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5X
        sITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUc
        X16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtj
        PAYuNzVBAh4vGHSrQyHUdBBPM"
    }
  },
  {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
    ],
    "type": ["VerifiableCredential", "EmailCredential"],
    "issuer": "https://idem.com.au/",
    "issuanceDate": "2022-03-01T12:00:00Z",
    "expirationDate": "2023-03-01T12:00:00Z",
    "credentialSubject": {
        "email": "ralph.lavelle@dltx.io"
      }
    },
    "proof": {
      "type": "EcdsaSecp256k1Signature2019",
      "created": "2022-03-01T12:00:00Z",
      "proofPurpose": "assertionMethod",
      "verificationMethod": "https://idem.com.au",
      "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5X
        sITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUc
        X16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtj
        PAYuNzVBAh4vGHSrQyHUdBBPM"
    }
  }],
  "proof": {
    "type": "EcdsaSecp256k1Signature2019",
    "created": "2022-03-01T12:00:00Z",
    "proofPurpose": "authentication",
    "verificationMethod": "did:idem:ebfeb1f712ebc6f1c276e12ec21#keys-1",
    "challenge": "8b5c66c0-bceb-40b4-b099-d31b127bf7b3",
    "domain": "https://demo.idem.com.au",
    "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..kTCYt5
      XsITJX1CxPCT8yAV-TVIw5WEuts01mq-pQy7UJiN5mgREEMGlv50aqzpqh4Qq_PbChOMqs
      LfRoPsnsgxD-WUcX16dUOqV0G_zS245-kronKb78cPktb3rk-BuQy72IFLN25DYuNzVBAh
      4vGHSrQyHUGlcTwLtjPAnKb78"
  }
}
```

## GPG Public Key

http://keys.gnupg.net/pks/lookup?search=info%40idem.com.au&fingerprint=on&op=index

```text
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
vQtS90Vx
=+be8
-----END PGP PUBLIC KEY BLOCK-----  
```
