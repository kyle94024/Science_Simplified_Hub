import LegalPage from "@/components/site/LegalPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of the Science Simplified network of websites and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="May 20, 2025">
      <p>
        Welcome to the network of websites and services provided by Science
        Simplified (&ldquo;Science Simplified,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;we&rdquo;). These Terms of Use (&ldquo;Terms&rdquo;) govern your
        use of our websites, applications, and other products or services that
        include an authorized link to these Terms (collectively, the
        &ldquo;Services&rdquo;).
      </p>
      <p>
        Please review these Terms carefully before using the Services because
        they affect your rights. By using any of the Services, you accept these
        Terms and agree to be legally bound by them. If you do not agree with
        these Terms, your sole remedy is to not use our Services.
      </p>
      <p>
        We may change these Terms in the future, so we encourage you to
        periodically review the Terms of Use applicable to each Service you use.
        The most current version of the applicable Terms of Use will be posted
        on each of the Services. Changes to these Terms will be effective
        immediately or, if required by law, 30 days after notice to you, which
        may be given by posting the updated Terms on our Services or by email.
        If you continue to use the Services after we change these Terms, you
        accept all changes.
      </p>

      <h2>1. User Accounts</h2>
      <p>
        As a user of our Services, you may be asked to register with us and
        provide private information. You are responsible for ensuring the
        accuracy of this information, and you are responsible for maintaining
        the safety and security of your login information.
      </p>
      <p>
        If you think there are any possible issues regarding the security of
        your account on our Services, contact us immediately so we may address
        them.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The text, photographs, graphics, logos, layouts, designs, interfaces,
        software, data and other content associated with the Services
        (&ldquo;Content&rdquo;) are protected by intellectual property and other
        laws in the U.S. and in other countries. You must comply with all such
        laws and applicable copyright, trademark, or other legal notices or
        restrictions. As between you and Science Simplified, Science Simplified
        will retain all right, title, and interest in and to the Services and
        the Content. No transfer of ownership to any portion of the Content
        shall be made as a result of any access you are granted. Except as
        specifically provided below, we reserve all rights in and to the
        Services and Content.
      </p>
      <p>
        You are only permitted to access and view the Content for personal,
        non-commercial purposes in accordance with these Terms, and may not
        build a business or other enterprise utilizing any of the Content,
        whether for profit or not.
      </p>

      <h2>3. Copyright Claims</h2>
      <p>
        We respect intellectual property rights. If you are a copyright owner
        (or the owner&rsquo;s authorized agent) and have a good-faith belief
        that material on the website infringes your copyrights, you may notify
        us using the following procedure.
      </p>
      <p>
        In order for us to process your notice of copyright infringement, it
        must be sent to the Designated Agent identified below and must include
        the information specified below. Send your notice of infringement to our
        designated agent for receiving such notices as set forth below:
      </p>
      <p>
        Science Simplified
        <br />
        Attn: Designated Agent
        <br />
        {site.mailingAddress}
        <br />
        Email Address: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>Your notice must include:</p>
      <ul>
        <li>
          A physical or electronic signature of a person authorized to act on
          behalf of the owner of an exclusive right that is allegedly infringed;
        </li>
        <li>
          Identification of the copyrighted work claimed to have been infringed,
          or, if multiple copyrighted works at a single online site are covered
          by a single notification, a representative list of such works at that
          site;
        </li>
        <li>
          Identification of the material that is claimed to be infringing or to
          be the subject of infringing activity and information reasonably
          sufficient to permit us to locate the material;
        </li>
        <li>
          A statement that the complaining party has a good-faith belief that
          use of the material in the manner complained of is not authorized by
          the copyright owner, its agent, or the law; and
        </li>
        <li>
          A statement that the information in the notification is accurate, and
          under penalty of perjury, that the complaining party is authorized to
          act on behalf of the owner of an exclusive right that is allegedly
          infringed.
        </li>
      </ul>
      <p>
        Upon receipt of a notice of claimed infringement that satisfies these
        requirements (or any statement in conformance with 17 U.S.C. §
        512(c)(3)), we will act expeditiously to remove or disable access to any
        content that is claimed to be infringing upon the copyright of any
        person under the laws of the United States.
      </p>

      <h2>4. User Submissions</h2>
      <p>
        Some of the Services may allow you to submit text or other materials
        (collectively, &ldquo;User Submissions&rdquo;) to or through the
        Services. When you provide User Submissions, you grant to Science
        Simplified a non-exclusive, worldwide, royalty-free, perpetual,
        irrevocable, fully sublicenseable license to use, reproduce, archive,
        edit, translate, create derivative works of, make available, distribute,
        sell, display, transmit and in any other way exploit those User
        Submissions, and any names, likenesses, and other identifying
        information of persons that is part of those User Submissions, in any
        form, media, software, or technology of any kind now known or developed
        in the future. You hereby waive any moral rights you may have in your
        User Submissions.
      </p>
      <p>
        We respect your ownership of User Submissions. If you owned a User
        Submission before providing it to us, you will continue owning it after
        providing it to us, subject to any rights granted in these Terms and any
        access granted to others. Please note that if you delete a User
        Submission from the Services:
      </p>
      <ul>
        <li>
          The User Submission may still exist in our backup copies, which are
          not publicly available.
        </li>
        <li>
          If your User Submission was shared with third parties, those third
          parties may have retained copies of your User Submissions, and we are
          not responsible for any uses of your User Submission that they might
          make.
        </li>
        <li>
          We retain the license specified above. Thus, for example, if we or one
          of our sublicensees obtained your User Submission for use in creating
          a derivative work before you deleted it, we or our sublicensee would
          remain free to complete the creation of that derivative work and
          thereafter exploit that derivative work for all purposes and at all
          times.
        </li>
        <li>
          We may refuse or remove a User Submission without notice to you. You
          also agree that we will not be liable for User Submissions or any loss
          or damage resulting from User Submissions.
        </li>
        <li>
          We do not guarantee that User Submissions will be private, even if the
          User Submission is in a password-protected area. Accordingly, you
          should not provide User Submissions that you want protected from
          others.
        </li>
        <li>
          You bear all responsibility for your User Submissions. You represent
          and warrant that you have all rights necessary to grant to Science
          Simplified the license above and that your User Submissions do not
          violate Section 6 (Acceptable Use).
        </li>
      </ul>

      <h2>5. Third Party Content</h2>
      <p>
        We may provide third party content (including advertisements) or link to
        third party websites on the Services. We do not necessarily endorse or
        evaluate third party content and websites, and we do not assume
        responsibility for third parties&rsquo; actions or omissions.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>
        Without limiting any other provision in these Terms, you agree not to do
        the following, or assist others to do the following:
      </p>
      <ul>
        <li>Access the Services using any interface other than ours.</li>
        <li>
          Maintain any link to the Services that we ask you to remove, in our
          sole discretion.
        </li>
        <li>
          Frame the Services or Content, make the Services or Content available
          via in-line links, otherwise display the Services or Content in
          connection with an unauthorized logo or mark, or do anything that
          could falsely suggest a relationship between Science Simplified and
          any third party.
        </li>
        <li>
          Threaten, defame, stalk, abuse, or harass other persons or engage in
          illegal activities, or encourage conduct that would constitute a
          criminal offense or give rise to civil liability.
        </li>
        <li>
          Transmit any material that is inappropriate, profane, vulgar,
          offensive, false, defamatory, obscene, illegal, sexually explicit,
          racist, that promotes violence, racial hatred, or terrorism, or that
          we deem, in our sole discretion, to be otherwise objectionable.
        </li>
        <li>
          Violate any person&rsquo;s or entity&rsquo;s legal rights (including,
          without limitation, intellectual property, privacy, and publicity
          rights), transmit material that violates or circumvents such rights,
          or remove or alter intellectual property or other legal notices.
        </li>
        <li>
          Transmit files that contain viruses, spyware, adware, or other harmful
          code.
        </li>
        <li>
          Advertise or promote goods or services without our permission
          (including, without limitation, by sending unsolicited email).
        </li>
        <li>
          Interfere with others using the Services or otherwise disrupt the
          Services.
        </li>
        <li>
          Disassemble, decompile or otherwise reverse engineer any software or
          other technology included in the Content or used to provide the
          Services.
        </li>
        <li>
          Engage in unauthorized spidering, &ldquo;scraping,&rdquo; data mining
          or harvesting of Content, or use any other unauthorized automated
          means to gather data from or about the Services.
        </li>
        <li>
          Impersonate any person or entity or otherwise misrepresent your
          affiliation or the origin of materials you transmit.
        </li>
        <li>
          Remove, avoid, interfere with, or otherwise circumvent any access
          control measures for the Services or Content, including
          password-protected areas and geo-filtering mechanisms, or any digital
          rights management measures used in connection with Content.
        </li>
        <li>
          Access any portion of the Services that we have not authorized you to
          access (including password-protected areas), link to password-protected
          areas, attempt to access or use another user&rsquo;s account or
          information, or allow anyone else to use your account or access
          credentials.
        </li>
      </ul>
      <p>
        If you violate this Section 6, we may terminate your access to the
        Services without notice, and take any other actions or seek any remedies
        permitted by law.
      </p>

      <h2>7. Access to Services and User Accounts</h2>
      <p>
        We may take any of the following actions in our sole discretion at any
        time, and without giving you prior notice:
      </p>
      <ul>
        <li>Change or discontinue the Services.</li>
        <li>
          Change how we offer and operate Services (e.g., to begin charging a fee
          to access features or Content that we previously made available
          without charge).
        </li>
        <li>Remove Content from the Services.</li>
        <li>
          Restrict, suspend, or terminate your access to one or more Services or
          features thereof.
        </li>
        <li>
          Deactivate your accounts and delete all related information and files
          in your accounts.
        </li>
      </ul>
      <p>
        We will not be liable to you or any third party for taking any of these
        actions and we will not be limited to the remedies above if you violate
        these Terms. If we terminate your access to any of the Services, you
        must immediately stop using such Service.
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You will defend, indemnify and hold harmless Science Simplified, its
        affiliates, and their respective directors, officers, employees,
        vendors, partners, contractors, agents, licensors or other
        representatives and all of their successors and assigns (collectively,
        the &ldquo;Science Simplified Parties&rdquo;) with respect to all third
        party claims, costs (including attorney&rsquo;s fees and costs),
        damages, liabilities, and expenses or obligations of any kind, arising
        out of or in connection with your use or misuse of the Services
        (including, without limitation use of your account, whether or not
        authorized by you, and claims arising from User Submissions). Science
        Simplified retains the right to assume the exclusive defense and control
        of any claim subject to indemnification, and in such cases you agree to
        cooperate with us to defend such claim. You may not settle any claim
        covered by this Section 8 without Science Simplified&rsquo;s prior
        written approval.
      </p>

      <h2>9. Disclaimers; Limitation of Liability</h2>
      <p>
        YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE ALONG WITH
        CONTENT AND MATERIALS AND THE OPPORTUNITY TO CONNECT WITH OTHERS ARE
        PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS.
        SCIENCE SIMPLIFIED EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND,
        WHETHER EXPRESS OR IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO
        ALL WARRANTIES OF MERCHANTABILITY, AND IMPLIED WARRANTIES OF FITNESS FOR
        A PARTICULAR PURPOSE, TITLE, ACCURACY, COMPLETENESS, AVAILABILITY,
        SECURITY, COMPATIBILITY, SATISFACTORY QUALITY, AND NON-INFRINGEMENT.
        SCIENCE SIMPLIFIED SPECIFICALLY DISCLAIMS LIABILITY FOR THE USE OF THE
        SERVICE.
      </p>
      <p>
        SCIENCE SIMPLIFIED MAKES NO WARRANTIES WITH RESPECT TO, AND EXPRESSLY
        DISCLAIMS ALL LIABILITY FOR: (i) CONTENT; (ii) USER SUBMISSIONS; (iii)
        ANY THIRD PARTY, OR THIRD-PARTY WEBSITE, THIRD-PARTY PRODUCT, OR
        THIRD-PARTY SERVICE ACCESSIBLE OR MADE AVAILABLE TO YOU THROUGH THE
        SERVICE; (iv) THE QUALITY OR CONDUCT OF ANY USER OR OTHER THIRD PARTY
        YOU ENCOUNTER IN CONNECTION WITH YOUR USE OF THE SERVICE, INCLUDING ANY
        ACTIVITIES, EVENTS, ENGAGEMENT OR INTERACTIONS WITH OTHERS THAT MAY BE
        FACILITATED THROUGH USE OF THE SERVICE; OR (v) UNAUTHORIZED ACCESS, USE
        OR ALTERATION OF CONTENT OR USER SUBMISSIONS. FURTHER, SCIENCE
        SIMPLIFIED MAKES NO WARRANTY THAT THE SERVICE (INCLUDING ANY CONTENT,
        INFORMATION, OR OTHER MATERIAL YOU OBTAIN, ACCESS, OR VIEW THROUGH THE
        SERVICE) WILL: (I) MEET YOUR REQUIREMENTS; (II) BE UNINTERRUPTED,
        TIMELY, SECURE OR ERROR-FREE; (III) WITHOUT VIRUSES OR OTHER HARMFUL
        COMPONENTS; (IV) BE ACCURATE OR RELIABLE; (V) BE OF SUFFICIENT QUALITY;
        AND (VI) BE CORRECTED OF ANY ERRORS. YOU USE MATERIAL DOWNLOADED OR
        OTHERWISE OBTAINED, ACCESSED, OR VIEWED THROUGH THE USE OF THE SERVICE
        AT YOUR OWN RISK. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
        OBTAINED BY YOU FROM SCIENCE SIMPLIFIED ON OR THROUGH THE SERVICE SHALL
        CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.
      </p>
      <p>
        TO THE EXTENT PERMISSIBLE UNDER APPLICABLE LAW, IN NO EVENT SHALL
        SCIENCE SIMPLIFIED BE LIABLE TO YOU FOR PERSONAL INJURY OR ANY SPECIAL,
        INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY
        DAMAGES WHATSOEVER, INCLUDING LOST PROFITS AND PROPERTY DAMAGE, EVEN IF
        WE WERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, THAT RESULT FROM THE
        USE OR INABILITY TO USE THE CONTENT OR THE SERVICE, HOWEVER CAUSED.
      </p>

      <h2>10. Governing Law, Venue, and Jurisdiction</h2>
      <p>
        These Terms and all claims arising from or related to your use of the
        Services will be governed by and construed in accordance with the laws
        of the State of California, except California&rsquo;s conflict of law
        rules. These Terms will not be governed by the United Nations Convention
        on Contracts for the International Sale of Goods, if applicable.
      </p>
      <p>
        With respect to any disputes or claims not subject to small claims
        court, you agree to exclusive jurisdiction in the state and federal
        courts in Santa Clara, California.
      </p>
      <p>
        Regardless of any statute or law to the contrary, you must file any
        claim or action related to use of the Services or these Terms within one
        year after such claim or action accrued. Otherwise, you will waive the
        claim or action.
      </p>

      <h2>11. Miscellaneous</h2>
      <p>
        We may be required by state or federal law to notify you of certain
        events. You hereby acknowledge and agree that such notices will be
        effective upon our posting them in the relevant Service or delivering
        them to you via email. If you do not provide us with accurate
        information, we will not be responsible for failure to notify you. Our
        failure to exercise or enforce any right or provision in these Terms
        will not constitute a waiver of such right or provision. These Terms
        constitute the entire agreement between you and us and supersede all
        prior agreements with respect to the subject matter hereof. Nothing in
        these Terms affects any non-waivable statutory rights that apply to you.
        If any part of these Terms is determined to be invalid or unenforceable
        under applicable law, that provision will be removed, and the remainder
        of the Terms will continue to be valid and enforceable.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
