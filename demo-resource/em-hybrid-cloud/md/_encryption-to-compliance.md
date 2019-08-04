## Encryption

The standard practice to encrypt data is by using asymmetric encryption. How this works, there are 2 keys used in the encryption process there is 1 private key that must be kept secret and 1 public key. The public key is transmitted with the data across the network but without a copy of hte private key at the destination the data cannot be decrypted. 

The reason for this and as alluded to a few times already is because the data is transported over a public network which is the internet. If it happens that the packets are sniffed by sniffing software or crawled by search engine crawlers the encrypted data would not have any meaning, even if the public key is acquired by a foreign party. 

Usually asymmetric encryption keys must be signed by a SSL (Secure Socket Layer) certificate provided by a registered and trusted authority. This is to ensure that firstly you are who you say you are, and from that point the authority will monitor the activity conducted by the entity and their keys. As soon as any below board activity is detected the authority will revoke a certificate and any connection established will be labeled as **"NOT SECURE"**.

In this case it is not required because the certificate generated will be used for one purpose and because there is no other third party to convince that you are legit, a self-signed certificate can be used to transfer encrypted data over the web.

> **WARNING**: Never, ever send your private key to anyone per email or other messages, save it in a remote filesystem that cannot become corrupt and that only you have access to. In the very unlikely event that your private key is required by another party that you deem authorized either grant  temporary access to download the private key while in a archived (zip, rar) format. The best and most secure way to handle this is to place the private key on flash memory and send it per registered courier.

Lastly as mentioned before a decision must be made whether to decrypt the saved backups or to keep them in encrypted format as this is better for confidentiality. Note that custom management console will have to be developed for in this case as the data can only be encrypted by the private key that must be kept securely on premise. 

## Life Cycle

The life cycle of the data is a decision you as the customer must make, note that this decision will have a cost implication. Infinity Arc advised that for south-african clients this must be in accordance with the companies act.

See section 24 of [this document](http://www.cipc.co.za/files/2413/9452/7679/CompaniesAct71_2008.pdf).

## Compliance

[Infinity Arc](www.infinityarc.net) subscribe to a strict privacy and confidentiality policy, that is an industry standard. You can view these policies in our [public policies portal](policies.infintyarc.net).

AWS published a document in July of 2019 to specifically address the situation of compliance with privacy and the protection of information entitled [Using AWS in the Context of South African Privacy Considerations](https://now-static-demos.c1i44.now.sh/Using_AWS_in_the_Context_of_South_African_Privacy_Considerations.pdf). This gives a clear guideline on how to implement AWS services to stay inline the Protection of Personal Information Act. 

Here is also a [list of testimonials](https://aws.amazon.com/compliance/testimonials/) as AWS must comply with privacy, security and confidentiality of information in several countries and industries as a global cloud provider.

AWS services are also compliant with [The European Union’s General Data Protection Regulation (GDPR)](https://aws.amazon.com/compliance/gdpr-center/?sc_ichannel=ha&sc_icampaign=acq_awsblogsb&sc_icontent=security-resources).

You can also find out [how AWS secures their data centers to be compliant](https://aws.amazon.com/compliance/data-center/data-centers/).

Lastly Infinity Arc will under no-circumstance avail your data to another third party unless legally obliged to do so under [these terms](https://aws.amazon.com/compliance/amazon-information-requests/).

## AWS Region consideration

AWS has big plans for opening a data center in South-Africa, this however is still in the pipeline and in the meanwhile your data will be saved in another data center. We recommend and use the UK data center as it is geographically closest and when considering network performance is at the movement the best choice. If you would like to explore more options check out this 