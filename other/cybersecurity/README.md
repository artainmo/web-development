# Cybersecurity

## Table of contents
- [Codecademy course](#CODECADEMY-COURSES)

## CODECADEMY COURSES
### Definition
Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.<br>
Digital attacks for example could consist of stealing data from a database such as credit card information, sending fraudulent emails asking for money, shutdown a website or use digital tools in a fraudulent way.<br>

The CIA Triad stands for confidentiality, integrity and availability and is a comprehensive model for cybersecurity.

**Confidentiality**<br>
Refers to the protection of private data.<br>
This can be done through: permission rights, data encryption, multi-factor authentification.

**Integrity**<br>
Refers to data integrity, meaning data should be protected from malignant change or deletion.<br>
This can be done through: keeping data backups, using cryptography to securely check for changes, keeping track of digital signatures to prove integrity of data.

**Availability**<br>
Refers to data being reliably available for those authorized.<br>
This can be done through: constant monitoring of servers and networks, maintaining hardware and software.

### Subsets
Forms of security:
* Information security (InfoSec), protects data from unauthorized users.
* Network security, is concerned with the network infrastructure of an organization that guards against unauthorized access or data from being intercepted.
* Application security refers to measures that defend applications (web, desktop or mobile) such as secure coding, antivirus programs.
* Cloud security refers to the new field which assures resources uploaded to the cloud are secure.
* Cryptography consists of encrypting and decrypting data for it to be unreadable or readable to prevent unauthorized users of accessing data.
* Critical infrastructure security consists of protecting hardware.

Laws affecting cybersecurity exist, applications must be compliant with local applicable laws.

Threat intelligence is the continuous gathering of knowledge of possible attacks.

Security operations consist of a team who is responsible for security by monitoring incidents and recovering from disasters.<br>

Cybercrime is, generally speaking, any crime that makes use of or targets a computer. Different types exist:
* Extortion consists of taking control of software and demand payment such as with ransomware.
* Fraud is a broad category including identity theft, scams, phishing.
* Theft consists of stealing data or theft of services and resources consists of for example using other people's computers to mine cryptocurrency.

### History
Cybersecurity developed as a distinct field throughout the 1960s and 70s and exploded into the public consciousness in the late 1980s, after a series of events that highlighted just how dangerous a lack of security could be.<br>
Continuing to grow throughout the 90s, cybersecurity is now a core part of modern life.

In the 70s the creation of ARPANET, the earliest form of the internet, gave hackers a lot to think about and explore.<br>
A 1975 paper titled 'The Protection of Information in Computer Systems' presented principles and concepts that would become critical to cybersecurity in the future.<br>

The Internet was formed in 1983. The late 80’s gave two major events, the first was the discovery that a hacker working for the KGB gained access to sensitive documents from the U.S. military.<br>
The second was the creation of the world’s truly serious piece of malware: the Morris Worm. It was originally written to map the size of the internet but quickly grew out of control, choking computers with multiple copies of itself, and clogging the network as it kept replicating.<br>

The 1990s are widely considered to be the era of viruses. Computers that connected to the internet became more common in households.<br>
The unfocused, scattered attacks of the era led to the rise of the anti-malware industry. Cybersecurity, as a whole, started to be taken much more seriously.

In the 2000's hundreds of millions of sets of credit card data were breached. The threats of data breaches and ransomware attacks forced large businesses to improve their cybersecurity programs.

During the 2010s, the scale of threats continued to grow. The most dangerous of these new threat actors are known as APTs: Advanced Persistent Threats. APTs are capable of running entire cyber-campaigns, attempting to infiltrate their target across multiple domains simultaneously.<br>

### Regulations
Regulations are sets of standards that organizations must follow, generally due to legal obligation, and define the responsibilities organizations have.

Digital Forensics is the process of gathering the evidence of a cybercrime in a way that the evidence can be used in a court of law.

The Computer Fraud and Abuse Act (CFAA) is a US law that is used to prosecute cybercrime.

The Health Insurance Portability and Accountability Act (HIPAA) is a U.S. federal law designed to modernize various aspects of healthcare and insurance. More importantly for cybersecurity, it introduced regulations and standards requiring entities that handle Protected Health Information (PHI) to ensure its security and privacy.

The Gramm-Leach-Bliley Act (GLBA) is a U.S. federal law governing financial institutions, requiring them to protect sensitive customer information, and disclose how they share that information.

The Payment Card Industry Data Security Standard (PCI DSS, or PCI for short) is a regulation developed by credit card companies and governing merchants that handle credit card data.

### Cyber Threats

#### Malware
Malware is malicious hardware, firmware, or software inserted into a system to cause damage or gain unauthorized access to a network.<br>

Adware is unwanted software designed to throw advertisements on your screen.

A virus is a malicious self-replacing application that attaches itself to other programs and executables without the permission of the user. It’s possible a downloaded virus could alter or delete data on the computer.

A worm is self-replicating code that copies itself from computer to computer without user intervention. The worm could also replicate so much that it overloads your client’s system.

Spyware is malicious code downloaded without a user’s authorization which is used to steal sensitive information and relay it to an outside party in a way that harms the original user. If the spyware contained a keylogger, a program that can record what a victim types into their computer, a threat actor could potentially gain access to sensitive information.

Trojans are a type of contained, non-replicating malware that disguises itself as legitimate software in order to allow scammers and hackers access to a user’s system.<br>
Be wary of untrustworthy disk computer cleaners and antivirus software pretending to be trustworthy.

Rootkits are a collection of malicious programs that secretly provide continued, privileged access to a system for an unauthorized user. A rootkit can create a backdoor on a computer to let a hacker in.<br>
A trojan horse can for example be used to let a rootkit in.

Ransomware consists of the malicious actors blocking access to data or threaten to publish the sensitive data unless the client pays them money. Ransomware is one of the largest cybersecurity threats facing industries today. 

Fileless malware is a type of malware that ‘lives off the land’ and uses legitimate tools and the user’s operating system to perform malicious activities like privilege escalation, data collection, and more. It’s incredibly hard to detect and almost always missed by antivirus software.<br>
Unlike a Trojan Horse, fileless malware is not pretending to be legitimate software, it actually is a part of legitimate software. Fileless malware hides itself within the code of legitimate software, often altering existing code to make it malicious.

To prevent malware do not click on strange links or download untrustworthy files, do not interact with suspicious emails, use a trustworthy antivirus software, disable unused applications and regularly update applications.<br>
To detect certain malware, monitor the computer for any unexpected changes, such as is it slower than usual, is there less hard drive space than expected, have files mysteriously appeared or disappeared?<br>
To revert from certain malware, backup important data and re-image it, reboot computer.

#### Phishing
The practice of tricking humans to get important data or access is also known as social engineering. Doing this through computers, often through email, is called phishing.

Vishing or voice phishing refers to spam calls trying to extract sensitive information.<br>
Smishing or SMS phishing, is phishing not done via email but via text messages.

Phishing is usually performed to the masses, but when it is prepared and personalized for one particular individual it is called spear phishing. If this individual is high profile this is called whaling. 

Often the goal of phishing is to incite a victim to send money, payment information, other sensitive data to the attacker or install malware.

Email spoofing refers to when an attacker falsifies their email headers to make it appear as though the email is coming from someone else.<br>
Still it is possible to view the actual email address used to send the mail and this is a good way of detecting phishing.

Webpages that harvest credentials are especially effective phishing tools. Because these pages often forward victims to a legitimate webpage after stealing their login information, the user never realizes they were phished. These webpages can also encourage you to download malware unknowingly.

#### SQL Injection
In apps containing a database, SQL injections consists of writing SQL code inside inputs, if this input is subsequently used inside an SQL database query, access is given to the database to unauthorized users.

A union-based injection leverages the power of the SQL keyword UNION. UNION allows us to take two separate SELECT queries and combine their results.<br>

In an error-based injection, an attacker writes a SQL query to force the application to return an error message with sensitive data.

Boolean-based injections involve SQL statements that can confirm TRUE/FALSE questions about the database.

A time-based injection makes use of several built in SQL functions, such as SLEEP() and BENCHMARK(), to cause visible delays in an application’s response time. This can be useful when you’re unable to get visible output and want a true/false response.

Unlike the other methods, which return the results via the web application, an out-of-band injection will leverage a new channel to retrieve information from a query.<br>
Generally, these SQL injections will cause the database server to send HTTP or DNS requests containing SQL query results to an attacker-controlled server. From there, the attacker could review the log files to identify the query results.<br>
These injections are extremely difficult to execute, because yhey rely on permissions to database functions that are most often disabled, and would have to bypass firewalls that might stop requests to the attacker’s server.

There are two main methods for preventing injection attacks:
* Sanitization is the process of removing dangerous characters from user input. Usually a programming language should have its own function for sanitization of inputs.
* Prepared statements also called parameterized queries is the most reliable way of protecting from SQL injections. It uses SQL query templates, which contains parameters that will never be considered SQL code.

#### Cross-Site Scripting (XSS) & Cross-Site Request Forgery (CSRF)
**XSS**<br>
Cross-Site Scripting (XSS) is a common web application vulnerability that occurs when a web application returns unsanitized input to the frontend of an application.<br>
An example of a place for this type of attack would be a comment section, your comment is accepted as input and displayed on frontend afterwards.<br>
In a XSS attack, an attacker takes advantage of this vulnerability by inputting malicious code, generally in the form of JavaScript, through the browser.

A stored XSS vulnerability occurs when a web server saves an attacker’s input into its datastores. Saved inputs can be returned to numerous victims.

Reflected XSS occurs when a user’s input is immediately returned back to the user. This return may come in the form of an error message or a popup. In these instances, the payload is never stored by the server.<br>
Rather, it exists as a value in the URL or request. Through phishing, an attacker could spread this transformed URL of a legitimate site to unsuspecting victims leading to execution of malicious scripts.

DOM-based XSS consists of an attacker injecting arbitrary code through the DOM. This type of attacks is completely client-side.<br>
For example, a web page may use client-side Javascript to customize a welcome page, displaying their name based on a value in the URL. Depending on how the javascript runs, an attacker may be able to replace the name value with a malicious script.

How to identify XSS vulnerabilities?<br>
When looking at the application, consider all possible fields. Comments, usernames, custom settings, and parameters all provide great starting points.<br>
Once we have identified a potential injection point, we can begin testing various inputs to create a proof-of-concept payload (POC). A POC payload will demonstrate that an issue exists, without causing damage.<br>
The most basic POC payload is `<script>alert(1);</script>`. If this does not work other ways without script tags may work such as `<img src="X" onerror=alert(1);>`.

Similar to SQL injections, XSS is preventable with both application-level firewalls and sanitization.<br>
Sanitization is the process of removing/replacing problematic characters with safe versions. Depending on the backend language, there may or may not be built in functions to aid in this process.

**CSRF**<br>
Cross-Site Request Forgery (CSRF) is another class of vulnerability focused on poor session controls and session management.<br>
Sometimes, the requests sent by an application aren’t unique. As such, it’s possible for an attacker to craft a special request and send that to a user.

Suppose our web application allows users to change their password via the following link, where [USER PASSWORD] would contain the new desired password `https://oursite.com/changepassword.php?new_password=\[USER PASSWORD]`.<br>
If the developers didn’t consider the impact of cross-site request forgery attacks, a threat actor may be able to create a new password link and send it to the user. When the user opens the link, they would initiate the password change, but with the attacker-supplied password.<br>
Because the request considers nothing but the current session, a user would have their password changed.

One of the simplest ways to prevent these attacks is to add a CSRF token. This token is a unique value that is added to each request. This value is dynamically generated by the server and used to verify all requests.<br>
While a CSRF token can prevent many malicious requests, it can still fail.  If an application is vulnerable to XSS a hacker could use their XSS attack to extract this token.<br>
A solution is to ask the user for his password before commiting a profile change.

#### Zero-Day and DDoS
**Zero-day**<br>
A “zero-day” (also called “0-day”) vulnerability is a newly-discovered software bug that a developer was not aware of before the software was released.<br>
Therefore, after it is discovered, the developer has “zero” days to patch it before it can be exploited. When a “zero-day attack” occurs, the vulnerability quickly becomes known and is patched by the developer.

The vast majority of cyber attacks exploit existing vulnerabilities and thus are not 0-day vulnerabilities. These vulnerabilities are catalogued and numbered as CVEs, or “Common Vulnerabilities and Exposures” and are maintained in places like the Mitre Corporation’s database or the National Vulnerability Database (NVD).<br>
Thousands of CVEs are recorded every year and are typically found first by either security companies or researchers participating in companies’ bug bounty programs. Bug bounty programs offer money (a bounty) to anyone able to find a vulnerability in their systems.

**DDoS**<br>
DDoS stands for Distributed Denial of Service. A DDoS attack is when an attacker attempts to make a resource, such as a website’s various servers, go offline by overwhelming it with web traffic.<br>
This is done by making requests to a server with large amounts of computers.

Botnets are “robot networks” made up of computers infected by malware. These botnets can be made up of millions of bots, and can even include IoT devices. A single attacker can spread malware to many devices, and then use all of those devices in concert to act together, oftentimes without the victims ever knowing that their devices are infected.<br>
Because botnet services can be rented out to other cybercriminals for specific attacks, anyone with the money to rent a botnet can carry out a DDoS attack, leveraging the power of millions of computers, making DDoS attacks ever more powerful.

There are a number of ways that websites try to guard against DDoS attacks, for example, by rate-limiting: limiting the number of requests a server will accept in a single time. CAPTCHAs can also provide some protection. Theoretically, a CAPTCHA can determine whether a user is a human or a “bot”, allowing legitimate web traffic to attempt to log in while blocking malicious automated traffic.<br>
In general, it is difficult to guard against DDoS attacks. This is why websites seek protection from organizations such as Cloudflare, which provides protection against DDoS attacks by sitting between the server and the client, and forwarding legitimate traffic to the server while hiding malicious traffic.

### Cryptography
**Encryption**<br>
Cryptography is the science of hiding data and making it available again.<br>

In cryptography, hiding data is called encryption and unhiding it is called decryption.<br>
When data is securely exchanged, it is first encrypted by the sender, and then decrypted by the receiver using a special key.

'https' that comes before many domain names indicates that encryption is being used to exchange data between the browser and the server.

Symmetric encryption uses the same key to both encrypt and decrypt data while asymmetric encryption uses two different keys to encrypt and decrypt data.<br>
Asymmetric encryption is the most secure way to transmit data, however, it is slower and more complex than symmetric encryption.<br>
Asymmetric encryption contrary to symmetric encryption contains a key pair, made up of a public key and a private key.<br>
The public key is only used to encrypt while the private key is used to decrypt and must be kept secret.<br>
For example, if you want to receive an encrypted message from someone, you would first generate a key pair and give them the public key. Then, they would write a message and encrypt it using the public key you gave them. Finally, they would send you the message and you would decrypt it with your private key.<br>
Having a private key you do not share makes it impossible for others to intercept and read messages.<br>

**Hashing**<br>
Hashing is a key application of cryptography. A cybersecurity professional uses hashing algorithms to compare files big and small, as well as to protect data.

Unlike the methods we’ve already looked at, which are designed to both encrypt and decrypt data, hashing is different. Hashing does not encrypt data. Instead, hashing is a one-way process that takes a piece of data of any size and uses a mathematical function to represent that data with a unique hash value of a fixed size. You cannot compute the original data from its hash.<br>
Although you cannot revert a hash to its initial value, you can compare the hash of a value with the hash of another value.<br>

Because each hash should be unique, hashing allows us to see if changes have been made to documents. By comparing hashes of files we can quickly see if changes have been made to a file.

A hash collision is when different values end up equating the same hash.<br>
While theoretically possible it is so rare with the modern hashing algorithm SHA-256 that it does not happen in practice, however, older hashing algorithms such as MD5 and SHA-1 are more likely to result in a hash collision.

Hashes are often used to store passwords in databases.<br>
This prevents passwords from being readable during data-breaches and this can be done because passwords never need to be displayed, comparing password hashes is sufficient.

Rainbow tables are tables used by hackers to compare password hashes from a data-breach with hashes from commonly used passwords with the goal of unfolding the actual passwords.<br>
Using complex passwords prevents this from working plus hashed passwords can be further protected using salts.<br>
Salts protect against rainbow tables by adding to the password before hashing a secret random string.

### authentification and authorization
Authentication is the verification of who you are and Authorization is the verification of what you have the right to do.<br>
Authentication and authorization go hand in hand. Users must be authenticated before carrying out the activity they are authorized to perform.<br>
Role-based access is exactly what it sounds like: you have permissions to access certain things (authorization) based on your role/responsibilities (authentication).

Single-Factor authentication refers to when only one form of authentication is used.<br>
Multi-Factor Authentication (MFA) is the use of multiple types of authentication in order to access a single resource. The most common form of Multi-Factor Authentication is Two-Factor Authentication (2FA). For example, if you log into your bank’s website with a username and password, and then receive a text message with a One-Time Passcode (OTP) that you also need to enter to gain access to your bank account.<br>
MFA is far more secure than Single-Factor Authentication and should always be used with important accounts such as your bank.<br>
Nevertheless, MFA is still vulnerable to certain kinds of attacks such as SIM Swapping, a phishing attack in which an attacker remotely steals a victim’s telephone number to receive a text-based OTP.

HTTP Basic Auth is the oldest (since 1999) and simplest method of authentication. It simply requires you to send your username and password every time you communicate with the web page. The reason this isn’t necessary when you use your browser is because of something called cookies. Cookies store your credentials so that you don’t need to send them every time you click on a button.

API Keys are similar to HTTP Basic Auth except, instead of a username and password, you use something called an API token. An API token is a unique string of letters and numbers generated for each user.<br>
Unfortunately, API Keys are too long and complex to be practical for everyday users to use them to log in, and like the credentials used in HTTP Basic Auth, they are vulnerable to interception when they are submitted for authentication.

Sometimes we don’t even have to create a username and password for a new account. Instead, we can sign in with Google, LinkedIn, Twitter, and more. This is possible because of OAuth.<br>
By using OAuth someone can connect through another application, this external application will send back user data to initial application after asking for it.<br>
OAuth tokens are great at defending users against data breaches since they eliminate the need to store passwords. However OAuth can be used by malicious applications to demand access to a lot of data from the external application.

### Network security
How we are able to exchange such large amounts of information over the web and between our devices may seem a bit mystical. How we keep this exchange secure is the whole field of network security.


## Free tutorials
### Ethical hacking?
Hacking is the act of working within the confines of a system to produce unintended behavior.<br>

### Request interception?

### Firewall?
