import React from 'react'
import './policy.css'
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Footer from './footer.js'

const Privacy_Policy = () => {
  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>

      <Navbar />

      <div className='main-policy-container'>
        <h2 className='policy-title'>Privacy Policy</h2>
        <p className="policy-content">

          {/* <p className="policy-sub-heading">SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</p> */}

          This privacy policy explains how IndiaMUN (“we,” “our,” or “us”) collects, uses, and protects any information that you give India MUN when you use this website, when you purchase and access our programs/events.<br /><br />

          India MUN is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.<br /><br />

          India MUN may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.<br /><br />

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}>1. We may collect the following information:</p>

            <ul >
              <li>Personal details: Name, email address, phone number, billing address</li>
              <li>Account details: Username, password, login history</li>
              <li>Program-related data: Enrollments, progress, completion status, certificates earned</li>
              <li>Payment information: Processed securely through Razorpay (we do not store card or UPI details)</li>
              <li>Technical data: IP address, browser type, device information, and cookies</li>
            </ul>
          </div>

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 2. What we do with the information we gather:</p>

            We require this information to understand your needs and provide you with a better service, and in particular for the following reasons: <br />
            <ul >
              <li>Internal record keeping.</li>
              <li>Provide access to purchased courses or enrolled programs/events</li>
              <li>Track course/program progress and issue certificates</li>
              <li>Process payments and invoices</li>
              <li>Send course updates, reminders, and learning-related communications</li>
              <li>We may use the information to improve our products, services and platform performance</li>
              <li>We may periodically send promotional emails about new programs/events, special offers or other information which we think you may find interesting using the email address which you have provided</li>
              <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests</li>
            </ul>
          </div>

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 3. Consent:</p>
            <ul >
              <li>By creating an account or purchasing/enrolling in programs/events, you consent to the collection and use of your personal data for the stated purposes.</li>
              <li>If we need your information for marketing, we will ask separately for your explicit consent.</li>
              <li>You may withdraw consent at any time by contacting us at secretariat@indiamun.org or mailing us at: No 513. Ground Floor, 3rd B Main, Bhuvanagiri, Banaswadi, Bangalore, Karnataka, India Bangalore KARNATAKA 560043</li>
            </ul>
          </div>

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 4. Disclosure:</p>
            We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
          </div>

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 5. Payment:</p>
            We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved. <br />
            Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. <br />
            PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
          </div>

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 6. Third-Party Services:</p>
            We may use trusted third-party service providers to deliver our services, such as: <br />
            <ul >
              <li>Payment processing</li>
              <li>Email communications</li>
              <li>Analytics</li>
              <li>Learning platform/LMS hosting</li>
              <li>These providers will only use your information to the extent necessary to provide their services. Please review their privacy policies for further details.</li>
            </ul>
          </div>

          In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. <br />
          However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.<br />
          For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.<br />
          In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.<br />
          Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.<br />
          When you click on links on our website, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.<br />

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 7. Security:</p>
            To protect your personal information and data, including: <br />
            <ul >
              <li>Encrypted storage of passwords</li>
              <li>Secure HTTPS access to our website</li>
              <li>Regular monitoring to prevent unauthorized access</li>
              <li>We take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</li>
            </ul>
          </div>

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 8. Cookies:</p>
            We use cookies to: <br />
            <ul >
              <li>Keep you logged into your account</li>
              <li>Analyze site usage and improve course delivery</li>
              <li>Personalize your learning experience.</li>
            </ul>
            It is not used to personally identify you on other websites.
          </div>

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 9. Data Retention:</p>
            <ul >
              <li>Course-related data (progress, certificates) is stored as long as your account is active</li>
              <li>Billing records are retained as per Indian tax laws</li>
              <li>You may request deletion of your account and associated personal data (except records we are legally required to keep).</li>
            </ul>
          </div>

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 10. Your Rights (as per India’s DPDP Act 2023 and other laws):</p>
            You have the right to: <br />
            <ul >
              <li>Access your personal data we hold</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for marketing at any time.</li>
            </ul>
            To exercise these rights, contact us at secretariat@indiamun.org
          </div>

          <div className="" style={{ paddingLeft: '25px', marginTop: '25px', marginBottom: '25px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> 11. Changes to this Privacy Policy</p>
            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.<br />
            If our company is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to feature our programs/events to you.
          </div>

          <div className="" style={{ marginTop: '25px', marginBottom: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}> Questions and Contact Information</p>
            If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at secretariat@indiamun.org or by mail at No 513. Ground Floor, 3rd B Main, Bhuvanagiri, Banaswadi, Bangalore, Karnataka, India Bangalore KARNATAKA 560043
          </div>
        </p>
      </div>

      <Footer />
    </>
  )
}

export default Privacy_Policy