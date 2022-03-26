<template>
  <q-page >
    <div class="row justify-center cb-font-16 text-weight-bolder cb-bg-white-2 q-pb-xs">
      <span class="cb-text-orange-8">Settings</span>
    </div>
    <div class="row q-px-md">
      <div class="col-12 flex">
        <q-icon name="notifications" size="sm" class="cb-text-orange-8"> </q-icon>
        <span class="q-px-md text-weight-bolder">Notification</span>
        <q-space></q-space>
        <q-checkbox v-model="Notification_alert" color="orange"></q-checkbox>
      </div>
      <div class="col-12 flex">
        <q-icon name="location_on" class="cb-text-orange-8" size="sm"> </q-icon>
        <span class="q-px-md text-weight-bolder">Location Permission</span>
        <q-space></q-space>
        <q-checkbox v-model="location_alert" color="orange"></q-checkbox>
      </div>
    </div>
    <div class="row q-px-lg">
      <div class="col-12 q-py-md">
        <span class="text-weight-bolder text-italic">Rate Us on Google Play Store</span><br>
        <a class="cb-text-blue-6" href="https://play.google.com/store/apps/details?id=com.chotaabeta&hl=en" target="black" style="text-decoration: none;">Show your love for us in public</a>
      </div>
      <div class="col-12 q-my-md cb-font text-weight-bolder">Legal</div>
      <div class="col-6 cb-text-grey-4">Our terms of us</div>
      <div class="col-6 text-center"><q-btn flat  size="sm" label="Terms And Condition" @click="terms_conditions = true" class="cb-text-blue-6" ></q-btn></div>
      <div class="col-6 cb-text-grey-4">Our privacy policy</div>
      <div class="col-6 text-center"><q-btn flat  size="sm" label="Privacy Policy" @click="privacy_policy = true"  class="cb-text-blue-6"></q-btn></div>
    </div>

    <q-dialog v-model="terms_conditions">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <span class="cb-font">CHOTABETA</span><br>
        <span>User Terms and Conditions</span>
        <p>**Definition and interpretations**<br>"COMPANY" means StackRoger solutions LLP and ChotaBeta is the delivery service app of StackRoger Solutions LLP and is direct representation of the COMPANY</p>
        <p>These terms of use ("Terms of Use") mandate the terms on which users ("You" or "Your" or "Yourself" or "Users") interested in browsing or availing ChotaBeta Services (defined below), and accessing the platform www.ChotaBeta.com and the mobile application owned and operated by ChotaBeta Digital Private Limited ("ChotaBeta") collectively referred to as, the "Platform" connects with the merchants registered on the Platform ("Tied-up Merchants"), merchants not registered on the Platform ("Non-tied up Merchants") (together hereinafter referred to as "Merchants") and with delivery partners ("Delivery Partners") to avail the ChotaBeta Services.</p>
        <p>By registering on Chotabeta, you agree to the terms of use and are legally bound by the same. Use of and access to the Platform is offered to the users upon the condition of acceptance of all the terms, conditions, policies and notices contained in this Terms of Use and Privacy Policy, along with any amendments made by ChotaBeta in future. Chotabeta reserves the right to add, alter, remove or review the T&Cs on the Platform periodically. You are subject to these T&Cs and policies whenever You use the Platform. As long as Users comply with the Terms, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use our Platforms and services.</p>
        <p class="text-title">CUSTOMER T&C</p>
        A. REGISTRATION:
        <ul style = "list-style-type:lower-roman;">
          <li>Users will be allowed to use Chotabeta Platform, utilize the services and/or connect with Merchants or Partners only after registering on the Platform.</li>
          <li> Users are required to provide details such as Name, valid mobile number and contact details during registration.</li>
          <li>Users might be required to undergo a verification process for validating the personal information provided during registration.</li>
          <li>Chotabeta retains the right to display information, feedback, rating, etc provided by the users.</li>
          <li>Chotabeta is not liable for accuracy or completeness of the data provided by the users in any way.</li>
          <li>ChotaBeta reserves the right to suspend or terminate user accounts if incorrect, inaccurate, incomplete data is provided by the user or if the company has reasonable grounds to suspect that such information has been provided by the users.</li>
        </ul>
        <p>SERVICE RELATED</p>
        <p>A. GENERAL:</p>
        <span>CHOTABETA provides USERS with the following services:</span>
        <ul style = "list-style-type:lower-roman;">
          <li>Connects Merchants and Drivers or Delivery Partners with Users.</li>
          <li>Allows Users to view the items/services ("Items") listed on the Platform.</li>
          <li>Allows Users to make purchases from Merchants listed on the Platform and get the Items delivered through Delivery Partners.</li>
          <li>Provides pickup and drop off services for packages from source to destination through Delivert Partners</li>
          <li>Allows users to hire Drivers for bikes and/or cars.</li>
          <li>Allows users to provide ratings and write reviews for Drivers and Delivery Partners.</li>
          <li>ChotaBeta may add, modify, upgrade or withdraw any of the listed services at any time. This decision is at the sole dicretion of the Company. ChotaBeta does not provide any guarantee to Users that the services will be available at all times.</li>
          <li>ChotaBeta only facilitates transactions between Users, Merchants, Drivers and Delivery Partners (as applicable) through the Platform. The Company only provides access to the Platform to enable Users to connect with Merchants, Drivers and Delivery Partners and shall not be liable in any manner or incur any liability for the services provided by the Merchants or the Delivery Partners, as the case may be.</li>
          <li>You hereby agree that ChotaBeta shall not be liable for the conduct, acts and omissions of the Merchants and Delivery Partners during the course of providing their services to You, or for any loss or damage to the Item or otherwise caused to You as a consequence of or in relation to the services being provided to You by the Merchants or the Delivery Partner, as the case may be.</li>
          <li>You shall be eligible to avail the ChotaBeta Services as per applicable laws. If users are purchasing any pharmaceutical products, using Chotabeta, You are responsible for ensuring that there is a valid prescription from a qualified doctor. The prescription needs to be uploaded on the platform. If Your prescription is not uploaded and/or not valid, the transaction shall be cancelled.</li>
          <li>You shall not initiate any transaction for any Item on the Platform which is illegal, immoral, unethical, unlawful, hazardous, unsafe or dangerous, containing harmful substances and/or is in violation of this Terms of Use and applicable laws.</li>
          <li>You specifically agree that You shall not initiate any transaction on the Platform for the purchase or delivery of any alcoholic beverages, narcotic drugs or psychotropic substances, etc. Further, You hereby acknowledge and agree that ChotaBeta shall not be liable for any indirect, direct damage or loss, cost, expense incurred by You in relation to the transactions initiated by You on the Platform.</li>
          <li>ChotaBeta does not check or verify the packages that are being picked up and dropped off on behalf of You or the Items that are being delivered to You by the Delivery Partner, and therefore ChotaBeta shall have no liability with respect to the same. However, if it comes to the knowledge of ChotaBeta that You have packaged any illegal or dangerous substance or availed the Pick- up and Drop Off Services using the Platform to deliver any illegal or dangerous substance, ChotaBeta shall have the right to report You to the government authorities and take other appropriate legal actions against You.</li>
          <li>You hereby acknowledge that ChotaBeta shall not be liable for any damages of any kind arising from Your use of the ChotaBeta Services, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.</li>
          <li>ChotaBeta shall retain the right to terminate Your request for any Service and shall not liable to provide a reason for the same.</li>
          <li>You hereby agree that ChotaBeta shall not be liable for any conduct or misbehaviour or actions of Delivery Partner with respect to any transactions initiated on the Platform. Further, You agree that ChotaBeta has no control over the Items provided to You by the Merchants and therefore, ChotaBeta shall not incur any liability with respect to such Items. However, keeping in mind the interests of the Users, We have informed our Merchants to ensure that Items are packaged properly to avoid any form of spillage or damage to the Item or any issues related to packaging</li>
          <li>You hereby agree that scheduling and rescheduling a transaction on the Platform depends upon the availability of Delivery Partners around Your area at the time of such scheduling and re-scheduling a transaction. Should You choose to reschedule a transaction on the Platform at a later point of time, You shall cancel the current transaction on the Platform (if initiated) and initiate a new transaction on the Platform, as per Your convenient time.</li>
          <li>Y18. You hereby agree that ChotaBeta shall use Your location based information captured through global positioning system to facilitate and improve the ChotaBeta Services being offered to You.</li>
        </ul>
        <p>**Eligibility**<br>
        Services of the App would be available to only select geographies in India. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including un-discharged insolvents etc. are not eligible to use the App. If you are a minor i.e. under the age of 18 years but at least 13 years of age you may use the App only under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Use. If your age is below 18 years your parents or legal guardians can transact on behalf of you if they are registered users. You are prohibited from purchasing any material which is for adult consumption and the sale of which to minors is prohibited</p>
        <p>**Pricing**<br>
        All the products listed on the App will be sold at MRP unless otherwise specified. The prices mentioned at the time of ordering will be the prices charged on the date of the delivery. Although prices of most of the products do not fluctuate on a daily basis but some of the commodities and fresh food prices do change on a daily basis. In case the prices are higher or lower on the date of delivery not additional charges will be collected or refunded as the case may be at the time of the delivery of the order.</p>
        <p>**Cancellation by App / Customer**<br>
        You as a customer can cancel your order anytime up to the cut-off time of the slot for which you have placed an order by calling our customer service. In such a case we will refund any payments already made by you for the order. If we suspect any fraudulent transaction by any customer or any transaction which defies the terms & conditions of using the webApp, we at our sole discretion could cancel such orders. We will maintain a negative list of all fraudulent transactions and customers and would deny access to them or cancel any orders placed by them.</p>
        <p>**Return & Refunds**<br>
        We have a "no questions asked return and refund policy" which entitles all our members to return the product at the time of delivery if due to some reason they are not satisfied with the quality or freshness of the product. We will take the returned product back with us and issue a credit note for the value of the return products which will be credited to your account on the App. This can be used to pay your subsequent shopping bills.</p>
        <p>**Services overview**<br>
        As part of the registration process on the App, ChotaB may collect the following personally identifiable information about you: Name including first and last name, alternate email address, mobile phone number and contact details, Postal code, Demographic profile (like your age, gender, occupation, education, address etc.) and information about the pages on the App you visit/access, the links you click on the App, the number of times you access the page and any such browsing information.</p>
        <p>**You Agree and Confirm**<br>
          That in the event that a non-delivery occurs on account of a mistake by you (i.e. wrong name or address or any other wrong information) any extra cost incurred by ChotaBeta for redelivery shall be claimed from you.<br>That you will use the services provided by the Site, its affiliates, consultants and contracted companies, for lawful purposes only and comply with all applicable laws and regulations while using and transacting on the Site.<br>
          You will provide authentic and true information in all instances where such information is requested of you. ChotaBeta reserves the right to confirm and validate the information and other details provided by you at any point of time. If upon confirmation your details are found not to be true (wholly or partly), it has the right in its sole discretion to reject the registration and debar you from using the Services and / or other affiliated websites without prior intimation whatsoever.<br>
          You authorise bigbasket to contact you for any transactional purposes related to your order/account.<br>
          That you are accessing the services available on this Site and transacting at your sole risk and are using your best and prudent judgment before entering into any transaction through this Site.<br>
          That the address at which delivery of the product ordered by you is to be made will be correct and proper in all respects.<br>
          That before placing an order you will check the product description carefully. By placing an order for a product you agree to be bound by the conditions of sale included in the item's description.</p>
          <p>**Modification of Terms & Conditions of Service**<br>
          ChotaBeta may at any time modify the Terms & Conditions of Use of the Website without any prior notification to you. You can access the latest version of these Terms & Conditions at any given time on the Site. You should regularly review the Terms & Conditions on the Site. In the event the modified Terms & Conditions is not acceptable to you, you should discontinue using the Service. However, if you continue to use the Service you shall be deemed to have agreed to accept and abide by the modified Terms & Conditions of Use of this Site.</p>
          <p>**Governing Law and Jurisdiction**<br>
          This User Agreement shall be construed in accordance with the applicable laws of India. The Courts at Telangana shall have exclusive jurisdiction in any proceedings arising out of this agreement.Any dispute or difference either in interpretation or otherwise, of any terms of this User Agreement between the parties hereto, the same shall be referred to an independent arbitrator who will be appointed by IRCPL and his decision shall be final and binding on the parties hereto. The above arbitration shall be in accordance with the Arbitration and Conciliation Act, 1996 as amended from time to time. The arbitration shall be held in Telangana. The High Court of judicature at Telangana alone shall have the jurisdiction and the Laws of India shall apply.</p>
          <br><p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to phone number, name, address, location. The information that we request will be retained by us and used as described in this privacy policy.</p>
          <br>
          <p>The app does use third party services that may collect information used to identify you, send notifications and sms to update your order status or app features and offers.</p>
          <br>
          <p>Link to privacy policy of third party service providers used by the app</p>
          <br>Text local
          <br>Adwings 
          <p>**Children's Information**<br>
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
          <p>ChotaBeta does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our webApp, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
          <p>**Prominent disclosure**<br>"ChotaBeta collects [MAPS_RECEIVE],[ACCESS_FINE_LOCATION], [ACCESS_COARSE_LOCATION] data to enable Google Maps, if User Location is in servicable area or not, only when the app is in foreground".</p>
          <p>"ChotaBeta READ_CONTACTS data to enable users to fetch the acquaintance name and number for facilitating the service, only when the app is in foreground".</p>
          <p>"ChotaBeta uses CALL_PHONE feature to allow users to contact delivery person for order tracking functionality, only when the app is in foreground".</p>
          <p>**Changes to This Terms and Conditions**<br>
          ChotaBeta has right to modify this terms and conditions for operating benefits/reasons of StackRoger Solutions LLP/Delivery Service Provider.</p>
          <p>Delivery conditions will differ in pandemic conditions</p>
          <p>If customer don't respond to the call ChotaBeta reserves all rights to cancel the orders</p>
          <p>Store prices may vary to the prices as shown in the app it depends on the selected items, store and area</p>
          <p>ChotaBeta referral points are not applicable on items prices they are valid to be deductible from delivery fee only, the referral points cannot be redeemed as cash or money transfer to bank or any other accounts. ChotaBeta reserves rights to revoke the referral points at any point of time.</p>
          <p>Calling will be done by third party only</p>
          <p>Third Party Usage:</p>
          <p>@athulrajt/LottieFiles</p>
      </q-card-section>
       <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="OK" @click="terms_conditions = false" ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="privacy_policy">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <p>**Privacy Policy for ChotaBeta**</p>
        <p>**Definition and interpretations**<br>
        "COMPANY" means StackRoger solutions LLP and ChotaBeta is the delivery service app of StackRoger Solutions LLP and is direct representation of the COMPANY</p>
        <p>**Personal Information**<br>
        Chotabeta, a hyperlocal logistics and concierge services provider, owned and operated by Stackroger Solutions LLP, with its registered office at 3-4-174/AF/104, 2nd Floor, Theme Arcade, Attapur, Rajendra Nagar, Hyderabad, India (“Company”, "We", "Us", "Our" and terms of similar meaning) is committed to protecting your privacy. For the purposes of this Privacy Policy, the Users, Delivery Partners, Merchants (as defined in the Terms of Use) shall together hereinafter be referred to as “You”, “Your” or “Yourself”.<br>Please read the Privacy Policy carefully before using or registering on the Platform or accessing any material, information or availing any services (“Services”) through the Platform. By clicking on the “I accept” button on the landing page, You accept this Privacy Policy and agree to be legally bound by the same.</p>
        <p>At ChotaBeta, accessible from https://www.chotabeta.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ChotaBeta and how we use it.</p>
        <p>**What information is, or may be, collected form you?**</p>
        <ol>
          <li>We collect Personal information such as First Name, Last Name, Gender, Email ID, Mobile Number, Shipping Address, Billing Address and Location. This information is used to enhance Your experience on the Platform and in the course of fulfilling your transactions.</li>
          <li>In the course of our service, we might also collect and use other non-personal information such as browser data, operating system, device unique identifier, IP address, cookie information and app usage data. This data does not have personal implications and will be used only for analytics to enhance your application and transactional and delivery experience.</li>
          <li> You consent to the sharing of Your information with third party service providers like partners, vendors, insurance partners, financial service providers and payment gateways</li>
          <li> We collect and use financial information like authorization of payment wallets and other forms of payment providers to help you pay online for your transactions. All online transactions on Chotabeta are handled by our payment partner and secured by them with the best security measures. You agree that the credit card details provided by you will be correct and is lawfully owned by you. We do not store Your payment information and do not have any direct control or responsibility for Your payment card account information. Although we shall try our best to protect Your data we cannot take any guarantee for the security of Your data transmitted through the Platform. You play an important role in keeping Your personal information secure. You shall not share Your user name, password, or other security information for Your account with anyone.</li>
          <li>We collect and retain your transaction details such as type of service requested, date and time of the transaction, invoices, payment details and other transaction details.</li>
          <li>We might collect personal information of third parties who are not registered on Chotabeta, including name, contact number and address in order to fulfil your transaction.</li>
          <li>We retain communication you send Us such as emails, feedback, reviews and ratings to process your queries and for record keeping.</li>
          <li>We might receive information about You from third parties like, partners, affiliates or if You use any of the other applications we’re partnered or associated with.</li>
          <li>We might share Your information with third party service providers like merchants or insurance service providers upon receipt of request by You to initiate a transaction to carry out specific service requests and fulfill such service requests. You hereby agree that such vendors or Merchants may contact You on the contact number provided on your account, during the course of transaction fulfilment.</li>
          <li>We access Your mobile Camera in order to allow You to capture images like grocery list, medical prescriptions, etc in order to process your transaction. Permission to allow Camera access is entirely optional for the Users. Furthermore, Chotabeta does not access other saved images or Your gallery in this process.</li>
          <li>We will not share your personal information to third parties unless we have your permission or are required by law to do so.</li>
          <li>We may send promotional emails, SMSs or push notifications about new services, special offers or other information which might be of interest to You.</li>
          <li>We may also use your information to contact you periodically for market research or service feedback. We may contact you by email, phone or mail.</li>
          <li>We are committed to protect your information and privacy. We have implemented appropriate digital, physical and electronic measures to prevent unauthorized access and safeguard Your information.</li>
          <li>By registering and transacting on the Platform, you acknowledge that the Company or its partners may contact you for sharing communication regarding the transactions you have initiated.</li>
          <li>The Company and its partners might share/transfer some or all of the information collected with another business entity in the event of a merger or acquisition or reorganization, amalgamation, in connection with or during negotiation of any merger, financing, acquisition, bankruptcy, dissolution, transaction or proceeding. If such a transaction occurs, the new business entity shall be contractually bound to comply with the terms of this Privacy Policy.</li>
          <li>By registering on the Platform, you agree that all information has been disclosed by You willingly and without any coercion. You are responsible for the authenticity of the information and the Company shall not be liable for any misrepresentation or fraud or negligence in the information shared by You.</li>
          <li>We follow strict guidelines to protect your information and privacy. Our data is stored in highly secured servers with password and pin protection to prevent unauthorized access or misuse.</li>
          <li>You are entirely responsible for protection of confidential information regarding your account like passwords and otps. In case of breach or unauthorized access, You should notify the Company immediately to block the account. Chotabeta is not liable for any loss, monetary or otherwise, that occurs in such a manner. You are solely liable for any losses incurred by the Company or its partners in such instances.</li>
          <li>You agree to adhere to ethical standards in the usage of the platform. Any violation or attempt at violation of our security features might subject you to criminal or civil liability. This might result in legal action and loss of access to the Platform. Types of violations might include, but not limited to: (1) unauthorized access of content or data that is not intended for you (2) unauthorized login to a server or account (3) unauthorized breach of security or attempt to test the vulnerability of the Platform (4) unauthorized use of automated processes or scraping tools to extract content from the Platform (5) interfering or attempting to interfere with service to any user, host, or network, including, without limitation, by means of submitting a virus to the Website/Application, overloading, initiating or facilitating any "denial of service" attack, "flooding," "spamming," "mail bombing" or "crashing;" (6) using any of our servers or application to send promotional or unsolicited e-mails (7) unauthorized usage of our header in any e-mails</li>
          <li>You may provide Your feedback, reviews, etc. on the Platform in relation to your transaction experience. You shall ensure that you comply with the applicable terms of use in such instances. The Company shall have sole authority to delete any such posts, which it deems do not comply with the terms of Use or any applicable laws. The company might make the posts and reserves the discretionary right to use and share such posts for any purpose.</li>
          <li>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to phone number, name, address, location. The information that we request will be retained by us and used as described in this privacy policy.</li>
        </ol>
        <p>The app does use third party services that may collect information used to identify you, send notifications and sms to update your order status or app features and offers.</p>
        <p>Link to privacy policy of third party service providers used by the app</p>
        <p>Text local<br>
        Adwings</p>
        <p>**Consent**<br>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.<br>
        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ChotaBeta. This policy is not applicable to any information collected offline or via channels other than this website.</p>
        <p>**How we use your information**<br>
          We use the information we collect in various ways, including to:</p>
        <p>Provide, operate, and maintain our website<br>
          Improve, personalize, and expand our website<br>
          Understand and analyze how you use our website<br>
          Develop new products, services, features, and functionality<br>
          Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes<br>
          Send you emails<br>
          Find and prevent fraud<br>
        Log Files</p>
        <p>ChotaBeta follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the Privacy Policy Generator and the Online Privacy Policy Generator.</p>
        <p>**Advertising Partners Privacy Policies**<br>
        You may consult this list to find the Privacy Policy for each of the advertising partners of ChotaBeta.</p>
        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ChotaBeta, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
        <p>Note that ChotaBeta has no access to or control over these cookies that are used by third-party advertisers.</p>
        <p>**Third Party Privacy Policies**<br>
        ChotaBeta's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
        <p>**CCPA Privacy Rights (Do Not Sell My Personal Information)**<br>
          Under the CCPA, among other rights, California consumers have the right to:<br>
        Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
        <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
        <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        <p>**GDPR Data Protection Rights**<br>
        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <ol>
          <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
        </ol>
        <p>**Children's Information**<br>
        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
        <p>ChotaBeta does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
        <p>**Prominent disclosure**<br>
        "ChotaBeta collects [MAPS_RECEIVE],[ACCESS_FINE_LOCATION], [ACCESS_COARSE_LOCATION] data to enable Google Maps, if User Location is in servicable area or not, only when the app is in foreground".</p>
        <p>"ChotaBeta READ_CONTACTS data to enable users to fetch the acquaintance name and number for facilitating the service, only when the app is in foreground".</p>
        <p>"ChotaBeta uses CALL_PHONE feature to allow users to contact delivery person for order tracking functionality, only when the app is in foreground".</p>
        <p>**Service Providers**<br>
        We may employ third-party companies and individuals due to the following reasons:</p>
        <p>To facilitate our Service;<br>
          To provide the Service on our behalf;<br>
          To perform Service-related services; or<br>
          To assist us in analyzing how our Service is used.<br>
        We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
        <p>**Security**</p>
        <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
        <p>**Changes to This Privacy Policy**<br>
        ChotaBeta has right to modify this privacy policy for operating benefits/reasons of StackRoger Solutions LLP/Delivery Service Provider.</p>
        <p>**Contact Information**<br>
        If You have any questions with regards to this Privacy Policy, you can contact us at support@chotabeta.com</p>
        <p>StackRoger Solutions LLP, Pillar 119, 2nd Floor,<br>
          Theme Arcade Building, <br>
        Lakshmi Nagar Colony, <br>
        Attapur, <br>
      500048.</p>
      <p>Email : support@chotabeta.com<br>
      Contact Number : +91-9121292347</p>
      </q-card-section>
       <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="OK" @click="privacy_policy = false" ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
  </q-page>
</template>
<script>
import {ref } from 'vue'
import axios from 'boot/axios'
export default ({
  setup(){
    return {
      access_token:ref(null),
      Notification_alert:ref(true),
      location_alert:ref(true),
      terms_conditions:ref(false),
      privacy_policy:ref(false),
      xid:ref(null),
    }
  },
  mounted () {
    var ps = this;
    ps.getAccessToken();
    
  },
  methods:{
    getAccessToken(){
      var ps = this;
      if(ps.$store.state.xid){ps.xid = ps.$store.state.xid;}
      else{ps.xid = ps.$store.state.xid_cb;}

      if(ps.$store.state.token){ ps.access_token = ps.$store.state.token; }
      else{ ps.access_token = ps.$store.state.token_cb; }

      if(ps.access_token == null ||  !ps.access_token){ ps.$router.push('/'); }
    },
  }
})
</script>