
## Operation   

Once all installation and configurations are complete, the operation of the backup solution will be scheduled as per your instruction. When an operation is triggers against a schedule the steps will run as follows.

1.  **Initialize and test that all components are operational.**

2.  **Determine the delta.**

    * *The delta is that part of the backup that has not yet been backed up.*

3. **Establish connection to the cloud.**

4. **Confirm delta against cloud backups.**

    * *This is to ensure that the delta's start is the current backups end.*

5. **Encrypt the delta with the private encryption key in preparation for transport.**

6. **Transport.**

    * In this step all packets are transported over [https](#https) to the cloud storage, packets that are lost along the way are retransmitted. Any detected interception attempts will result in connection terminations that will notify all relevant parties of nefarious activity which will trigger an immediate investigation.

7. **Complete transport decrypt and save in cloud storage**

    * Confirms that the local and cloud backups are in sync. Here the client can opt to be notified of each completion with details of the backup operation.

8.  **Listen for next operation.**

> **CONSIDERATION**: For added security you have to option to not decrypt saved backups, this means that no-one, and by this I only mean myself only, can view or tamper with your data. If a troll manages to break into the cloud penetrate all the security layers, and get the date out of the cloud before being caught, the data would be useless without the private security key to decrypt the data into a coherent format. Although the risk here is that if the private key is lost somehow, all backups would be rendered useless.

## Security {id="security-detail"}

It is important to note that the current solution without added extras provide sufficient layers of security in order to defend a possible breach of regulation. Protection is provided at each tier the data must travel through to ensure it does not get lost or stolen. And once stored access is restricted to only those who have access. 

On the local side security is provided with a firewall and network security, it is important that the server where the backups will be temporarily stored has anti-virus software that is run on a regular basis. In terms of network security it is important that the network is monitored by software for any breach or irregular activity and maintained on a regular basis.

> **IMPORTANT NOTICE**: If Infinity Arc is not the service provider of network administration and maintenance liability cannot be accepted in this space for any breach in confidential information. But we will ensure that at the point of installation the local network is configured to provide the expected security.

### Cloud security 

AWS is one of the leading cloud providers in world and as such also ensures that data remains secure while stored in the cloud. If you would like to know more about this please visit [this link](https://aws.amazon.com/security/) and you can also read [this document](https://aws.amazon.com/security/). You can also wathc this video: