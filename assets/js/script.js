window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { 
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });  //for nabvar background change on scroll



// Content database
const contentData = {
  policy: {
    heading: "Information Security Policy",
    text: `Our Information Security Policy establishes a comprehensive framework for protecting the confidentiality, integrity, and availability of data, systems, and networks across the organization. It sets clear security objectives, compliance requirements, and operational practices designed to safeguard organizational information from internal and external threats, while ensuring regulatory and contractual obligations are met. The policy emphasizes the protection of sensitive information, including personally identifiable information (PII), financial records, intellectual property, and other critical business data, against unauthorized access, disclosure, modification, or destruction.<a href="/" class="LearnMore">Learn More ></a>`
  },
  roles: {
    heading: "Roles and Responsibilities",
    text: `Clear roles and responsibilities are fundamental to maintaining an effective and accountable information security program. Every member of the organization, from executive leadership to operational staff, has a distinct responsibility in protecting information assets, ensuring compliance, and mitigating risks. Employees are expected to follow established security policies, participate in mandatory training programs, report any suspicious activities, and protect sensitive data in all daily operations. Managers and supervisors are responsible for enforcing security procedures within their teams, monitoring adherence to policies, and escalating issues to higher management or the Information Security Officer (ISO) as necessary. <a href="/" class="LearnMore">Learn More ></a>`
  },
  bia: {
    heading: "Business Impact Analysis",
    text: `The Business Impact Analysis (BIA) is a critical component of our organization's information security and continuity planning efforts. It systematically identifies and evaluates essential business functions, determining the potential impact of disruptions on these operations. By assessing the financial, operational, and reputational consequences of various threats—such as cyberattacks, natural disasters, or system failures—the BIA enables us to prioritize recovery strategies effectively. <a href="/" class="LearnMore">Learn More ></a>`
  },
  classification: {
    heading: "IT System and Data Sensitivity Classification",
    text: `We classify IT systems and data based on their sensitivity to ensure the right level of protection. Classification categories typically include:</br></br>

       <strong>Public:</strong> Information intended for general access without restrictions.</br>
       <strong>Internal:</strong> Business-use information not for public disclosure.</br>
       <strong>Confidential:</strong> Sensitive data requiring controlled access.</br>
       <strong>Restricted:</strong> Highly sensitive systems/data with strict protection measures.</br> <a href="/" class="LearnMore">Learn More ></a>`
  },
  definition: {
    heading: "Sensitive IT System Inventory and Definition",
    text: `An inventory of sensitive IT systems helps maintain visibility and proper protection. Each system is defined by:</br></br>

       <strong>System Name & Owner:</strong>  Identification and accountability.</br>
       <strong>Data Handled:</strong>Type of sensitive or regulated information processed.</br>
       <strong>Criticality:</strong> Impact of downtime or data loss on business operations.</br>
       <strong>Controls Applied:</strong> Security measures in place for protection.</br> <a href="/" class="LearnMore">Learn More ></a>`
  },
  risk: {
    heading: "Risk Assessment",
    text: `Risk assessments evaluate potential threats and vulnerabilities to IT systems and data. The process typically includes:</br></br>

       <strong>Identify Assets:</strong> Catalog critical systems, data, and processes.</br>
       <strong>Analyze Threats & Vulnerabilities: </strong>Assess possible risks and weaknesses.</br>
       <strong>Evaluate Impact & Likelihood:</strong> Measure business impact if risks materialize.</br>
       <strong>Mitigation Plans: </strong> Recommend controls and prioritize risk treatments.</br> <a href="/" class="LearnMore">Learn More ></a>`
  },
  it: {
    heading: "IT Security Audits",
    text: `IT security audits are conducted to evaluate the effectiveness of security measures, compliance with policies, and adherence to regulatory standards. These audits help identify gaps and strengthen the overall security posture.</br></br>

       <strong>Compliance Review:</strong>  Ensures alignment with industry standards (e.g., ISO, NIST, GDPR).</br>
       <strong>Vulnerability Assessment: </strong>Identifies weaknesses in systems, networks, and processes.</br>
       <strong>Control Effectiveness: </strong> Tests whether implemented safeguards are working as intended.</br>
       <strong>Continuous Improvement:</strong> Provides recommendations to reduce risks and enhance resilience.</br> <a href="/" class="LearnMore">Learn More ></a>`
  },
   catalog: {
    heading: "Security Controls Catalog",
    text: `The Security Controls Catalog provides a comprehensive list of technical and organizational measures used to safeguard systems and data. These controls are aligned with best practices and regulatory requirements.</br></br>

       <strong>Access Controls:</strong> Role-based access, authentication, and authorization policies.</br>
       <strong>Network Security:</strong>Firewalls, intrusion detection/prevention, and segmentation.</br>
       <strong>Data Protection: </strong> Encryption, backup, and secure data handling processes.</br>
       <strong>Monitoring & Logging:</strong> Continuous monitoring of systems for anomalies and threats.</br>
       <strong>Incident Response:</strong> Defined processes to detect, respond, and recover from security incidents.</br><a href="/" class="LearnMore">Learn More ></a>`
  },
  data: {
    heading: "SEC 540 — Data Classifications",
    text: `The Data Classification Standard (SEC 540) establishes how agencies across the Commonwealth of Virginia (COV) classify and protect information. Agencies must safeguard electronic data in line with the Code of Virginia and comply with federal regulations such as HIPAA, FERPA, PCI, and others.</br></br>

       <strong>Why it matters:</strong> Protects confidentiality, integrity, and availability while meeting legal and regulatory requirements.</br>
       <strong>Who it applies to: </strong>All employees, contractors, and partners handling organizational data in any format.</br>
       <strong>How data is classified: </strong> Based on confidentiality, regulatory needs, business impact, and access requirements.</br>
       <strong>Classification labels: </strong> Define usage, compliance, and sensitivity or handling requirements.</br>
       <a href="/" class="LearnMore">Learn More ></a>`
  },
  
};

// Handle clicks
document.querySelectorAll(".midSectionLeft li").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    const key = this.getAttribute("data-key");
    const content = contentData[key];
    const midContent = document.getElementById("midContent");

    if (content) {
      // Add animate-out
      midContent.classList.remove("animate-in");
      midContent.classList.add("animate-out");

      // Wait for animate-out to finish
      midContent.addEventListener("animationend", function handler(e) {
        if (e.animationName === "slideOut") {
          // Replace content only AFTER slideOut ends
          midContent.innerHTML = `
            <p class="heading">${content.heading}</p>
            <p class="content">${content.text}</p>
          `;

          // Trigger animate-in
          midContent.classList.remove("animate-out");
          midContent.classList.add("animate-in");
        }

        // Cleanup listener
        midContent.removeEventListener("animationend", handler);
      });
    }
  });
});
