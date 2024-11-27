export const EmailTemplates = {
  ORGANISATION_CREATE: {
    id: "ORGANISATION_CREATE",
    subject: "Bahamas National Emission Registry Approval",
    html: `
        Dear {{organisationName}},<br><br>
        Your company has received authorization to operate as a Management Company in the Commonwealth of The Bahamas.  Your admin profile is ready for use. Please find login details below. Please note that your Certificate of Authorisation has been uploaded to you user profile on the Registry. <br><br>
        Explore the Registry here {{home}}. <br><br>

        Sincerely,<br>
        The Bahamas National Emission Registry Team
        `,
  },
  USER_CREATE: {
    id: "USER_CREATE",
    subject: "Account creation The Bahamas National Emission Registry",
    html: `
        Dear {{name}}, <br><br>

        Your account has been created for use on The Bahamas National Emission
        Registry. You can access your account using the Homepage: {{home}} <br><br>

        User: {{email}} <br>
        Password (temporary): {{tempPassword}} <br><br>

        If you have any questions, feel free to email our team
        <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
    text: "",
  },
  API_KEY_EMAIL: {
    id: "API_KEY_EMAIL",
    subject: "The Bahamas National Emission Registry API Key Generation",
    html: `
        Hi {{name}},<br><br>

        Your National Emission Registry account api key regenerated  - {{apiKey}}.
        <br><br>
        Sincerely,<br>
        The Bahamas National Emission Registry Team
    `,
    text: "",
  },
  RETIRE_REQUEST: {
    subject: "Retire Request Received",
    html: `
        Dear {{name}},<br><br>

        {{requestedCompany}} has requested to retire {{credits}} credits with the serial number {{serialNo}} from {{programmeName}}.

        <br><br>
        Sincerely,<br>
        The Bahamas National Emission Registry Team
        `,
    text: "",
  },
  CHANGE_PASSOWRD: {
    id: "CHANGE_PASSOWRD",
    subject: "Your Password was Changed",
    html: `
        Dear {{name}},<br><br>
        This email serves to notify you that your password for the National Emission Registry was successfully changed. If you did not request this change, please click here.
        <br><br>
        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
    text: "",
  },
  FORGOT_PASSOWRD: {
    id: "FORGOT_PASSOWRD",
    subject: "Password Reset Request",
    html: `
        Dear {{name}},<br><br>
        We received a request to reset your National Emission Registry password. <br><br>
        Use the link below to set a new password for your account. This password reset is only valid for the next hour.
        <br><br>

        <a href="{{home}}/resetPassword/{{requestId}}">Click here to reset the password</a>
        <br><br>

        If you do not use The Bahamas National Emission Registry or did not request a password reset, please ignore this email.

        <br><br>
        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
    text: "",
  },
  PROGRAMME_CREATE: {
    id: "PROGRAMME_CREATE",
    subject: "New Project Received for Authorisation",
    html: `
        Dear {{name}}, <br><br>

        A new project owned by {{organisationName}} is awaiting authorisation. <br><br>

        Click <a href="{{programmePageLink}}">here</a> to access all the projects that require authorisation.
        <br><br>

        Sincerely,  <br>
        The Bahamas National Emission Registry Team
        `,
  },
  PROGRAMME_AUTHORISATION: {
    id: "PROGRAMME_AUTHORISATION",
    subject: "Project Authorised",
    html: `
        Dear {{name}},  <br><br>

        {{programmeName}}  of your Management Company has been authorised on {{authorisedDate}} with the serial number {{serialNumber}}.
        <br><br>

        Click <a href="{{programmePageLink}}">here</a> for more details of the programme.
        <br><br>

        Sincerely,  <br>
        The Bahamas National Emission Registry Team
        `,
  },
  PROGRAMME_REJECTION: {
    id: "PROGRAMME_REJECTION",
    subject: "Project Rejected",
    html: `
        Dear {{name}}, <br><br>

        {{programmeName}} of your Management Company has been rejected on {{date}} due to the following reason/s: <br>
        {{reason}} <br><br>

        Click <a href="{{pageLink}}">here</a> for more details of the programme.<br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_ISSUANCE: {
    id: "CREDIT_ISSUANCE",
    subject: "Credits Issued",
    html: `
        Dear {{name}}, <br><br>

        {{programmeName}} of your Management Company with the serial number {{serialNumber}} has been issued with {{credits}} credits.<br><br>

        Click <a href="{{pageLink}}">here</a> for more details of the project.<br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_TRANSFER_REQUISITIONS: {
    id: "CREDIT_TRANSFER_REQUISITIONS",
    subject: "Transfer Request Received",
    html: `
        Dear {{name}}, <br><br>

        {{organisationName}} has requested to transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}}.<br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the transfer request.<br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_TRANSFER_CANCELLATION: {
    id: "CREDIT_TRANSFER_CANCELLATION",
    subject: "Transfer Request Cancelled",
    html: `
        Dear {{name}}, <br><br>

        Request to transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} made by {{organisationName}} has been cancelled.<br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the transfer request.<br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_TRANSFER_CANCELLATION_SYS_TO_INITIATOR: {
    id: "CREDIT_TRANSFER_CANCELLATION_SYS_TO_INITIATOR",
    subject: "Transfer Request Cancelled by the System",
    html: `
      Dear {{name}}, <br><br>

      Request to transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} to {{organisationName}} made by your Management Company has been cancelled due to insufficient credits available. <br><br>
      Click <a href="{{pageLink}}">here</a> for more details of the transfer request. <br><br>

      Sincerely, <br>
      The Bahamas National Emission Registry Team
    `,
  },
  CREDIT_TRANSFER_CANCELLATION_SYS_TO_SENDER: {
    id: "CREDIT_TRANSFER_CANCELLATION_SYS_TO_SENDER",
    subject: "Transfer Request Cancelled by the System",
    html: `
      Dear {{name}}, <br><br>

      Request to transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} to {{organisationName}} made by {{initiatorOrganisationName}} has been cancelled due to insufficient credits available. <br><br>
      Click <a href="{{pageLink}}">here</a> for more details of the transfer request. <br><br>

      Sincerely, <br>
      The Bahamas National Emission Registry Team
    `,
  },
  CREDIT_TRANSFER_ACCEPTED: {
    id: "CREDIT_TRANSFER_ACCEPTED",
    subject: "Transfer Request Accepted",
    html: `
        Dear {{name}}, <br><br>

        Request to transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} made by your Management Company has been accepted by {{organisationName}}.<br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the transfer request. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_TRANSFER_REJECTED: {
    id: "CREDIT_TRANSFER_REJECTED",
    subject: "Transfer Request Rejected",
    html: `
        Dear {{name}}, <br><br>

        Request to transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}}
        made by your Management Company has been rejected by {{organisationName}}.<br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the transfer request. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team`,
  },
  CREDIT_TRANSFER_GOV: {
    id: "CREDIT_TRANSFER_GOV",
    subject: "Transfer Request Received",
    html: `
        Dear {{name}}, <br><br>

        {{government}} has requested your Management Company to transfer {{credits}} credits with the serial number {{serialNumber}}
         from {{programmeName}} to {{organisationName}}. <br><br>

        Click <a href="{{pageLink}}">here</a> for more details of the transfer request. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_TRANSFER_GOV_CANCELLATION: {
    id: "CREDIT_TRANSFER_GOV_CANCELLATION",
    subject: "Transfer Request Cancelled",
    html: `
        Dear {{name}},<br><br>

        Request to transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}}
        to {{organisationName}} made by {{government}} has been cancelled. <br><br>

        Click <a href="{{pageLink}}">here</a> for more details of the transfer request. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_TRANSFER_GOV_ACCEPTED_TO_INITIATOR: {
    id: "CREDIT_TRANSFER_GOV_ACCEPTED_TO_INITIATOR",
    subject: "Transfer Request Accepted",
    html: `
        Dear {{name}},<br><br>

        Request to transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} made by your Management Company has been accepted by {{organisationName}}. <br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the transfer request.<br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_TRANSFER_GOV_ACCEPTED_TO_RECEIVER: {
    id: "CREDIT_TRANSFER_GOV_ACCEPTED_TO_RECEIVER",
    subject: "Credits Received",
    html: `
        Dear {{name}},<br><br>

        {{organisationName}} has transferred {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} to your Organisation by accepting the request made by the {{government}}.<br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the transfer request <br> <br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_TRANSFER_GOV_REJECTED: {
    id: "CREDIT_TRANSFER_GOV_REJECTED",
    subject: "Transfer Request Rejected",
    html: `
        Dear {{name}},<br><br>

        Request to transfer {{credits}}  credits with the serial number {{serialNumber}} from {{programmeName}} made by your Management Company has been rejected by {{organisationName}}. <br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the transfer request <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_SEND_DEVELOPER: {
    id: "CREDIT_SEND_DEVELOPER",
    subject: "Credits Received",
    html: `
        Dear {{name}},<br><br>

        {{organisationName}} has transferred {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} to your Management Company.<br><br>

        Click <a href="{{pageLink}}">here</a> for more details of the transfer request. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  PROGRAMME_CERTIFICATION: {
    id: "PROGRAMME_CERTIFICATION",
    subject: "Project Certified by {{organisationName}}",
    html: `
        Dear {{name}},<br><br>

        The {{programmeName}} containing {{credits}} credits with the serial number {{serialNumber}} of your Management Company has been certified by {{organisationName}}. <br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the certification. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  PROGRAMME_CERTIFICATION_REVOKE_BY_CERT: {
    id: "PROGRAMME_CERTIFICATION_REVOKE_BY_CERT",
    subject: "Project Certificate Revoked by {{organisationName}}",
    html: `
        Dear {{name}},<br><br>

        The certification of the project {{programmeName}} containing {{credits}} credits with the serial number {{serialNumber}} has been revoked by {{organisationName}}. <br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the certification. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  PROGRAMME_CERTIFICATION_REVOKE_BY_GOVT_TO_PROGRAMME: {
    id: "PROGRAMME_CERTIFICATION_REVOKE_BY_GOVT_TO_PROGRAMME",
    subject: "Project Certificate Revoked by {{government}}",
    html: `
        Dear {{name}},<br><br>

        The certification given by {{organisationName}} for the project {{programmeName}} containing {{credits}} credits with the serial number {{serialNumber}} has been revoked by the {{government}}. <br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the certification. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  PROGRAMME_CERTIFICATION_REVOKE_BY_GOVT_TO_CERT: {
    id: "PROGRAMME_CERTIFICATION_REVOKE_BY_GOVT_TO_CERT",
    subject: "Project Certificate Revoked by {{government}}",
    html: `
        Dear {{name}},<br><br>

        The certification given by your Management Company for the project {{programmeName}} containing {{credits}} credits with the serial number {{serialNumber}} has been revoked by the {{government}}. <br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the certification. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  PROGRAMME_CERTIFICATION_REVOKE_BY_SYSTEM: {
    id: "PROGRAMME_CERTIFICATION_REVOKE_BY_SYSTEM",
    subject: "Project Certificate Revoked by the System",
    html: `
        Dear {{name}},<br><br>

        The certification given by {{organisationName}} for the project {{programmeName}} containing {{credits}} credits with the serial number {{serialNumber}} has been revoked by the system as {{organisationName}} was deactivated. <br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the certification. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  PROGRAMME_DEVELOPER_ORG_DEACTIVATION: {
    id: "PROGRAMME_DEVELOPER_ORG_DEACTIVATION",
    subject: "Management Company Deactivated",
    html: `
        Dear,<br><br>

        Your Management Company has been deactivated by the {{government}}. Your Management Company will still be visible but no further action will be able to take place. Following were the effects of deactivation:<br><br>
         · All the users of the Management Company were deactivated. <br>
         · All the credits owned by your Management Company were frozen.<br>
         · All credit transfer requests sent and received by your Management Company were cancelled.<br>
         · All the international transfer retire requests sent by your Management Company were cancelled.<br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CERTIFIER_ORG_DEACTIVATION: {
    id: "CERTIFIER_ORG_DEACTIVATION",
    subject: "Management Company Deactivated",
    html: `
        Dear,<br><br>

        Your Management Company has been deactivated by the {{government}}. Your Management Company will still be visible but no further action will be able to take place. Following are the effects of deactivation: <br><br>
        · All the users of the Management Company were deactivated.<br>
        · All the certificates given by your Management Company were revoked. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_RETIREMENT_BY_GOV: {
    id: "CREDIT_RETIREMENT_BY_GOV",
    subject: "Credits Retired",
    html: `
        Dear {{name}},<br><br>

        {{credits}} credits of the project {{programmeName}} with the serial number {{serialNumber}} has been retired by the {{government}} as {{reason}}.<br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the retirement. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_RETIREMENT_BY_DEV: {
    id: "CREDIT_RETIREMENT_BY_DEV",
    subject: "International Transfer Retire Request Received",
    html: `
        Dear {{name}},<br><br>

        {{organisationName}} has requested an international transfer retirement of {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}}. <br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the international transfer retire request. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_RETIREMENT_CANCEL: {
    id: "CREDIT_RETIREMENT_CANCEL",
    subject: "International Transfer Retire Request Cancelled",
    html: `
        Dear {{name}},<br><br>

        Request to internationally transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} to {{country}} made by {{organisationName}} has been cancelled.<br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the international transfer retire request. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_RETIREMENT_CANCEL_SYS_TO_INITIATOR: {
    id: "CREDIT_RETIREMENT_CANCEL_SYS_TO_INITIATOR",
    subject: "International Transfer Retire Request Cancelled by the System",
    html: `
      Dear {{name}},<br><br>
      Request to internationally transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} to {{country}} made by your Management Company has been cancelled by the system due to insufficient credits available. <br><br>
      Click <a href="{{pageLink}}">here</a> for more details of the international transfer retire request. <br><br>

      Sincerely,  <br>
      The Bahamas National Emission Registry Team
    `,
  },
  CREDIT_RETIREMENT_CANCEL_SYS_TO_GOV: {
    id: "CREDIT_RETIREMENT_CANCEL_SYS_TO_GOV",
    subject: "International Transfer Retire Request Cancelled by the System",
    html: `
      Dear {{name}},<br><br>
      Request to internationally transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} to {{country}} made by {{organisationName}} has been cancelled by the system due to insufficient credits available. <br><br>
      Click <a href="{{pageLink}}">here</a> for more details of the international transfer retire request. <br><br>

      Sincerely,  <br>
      The Bahamas National Emission Registry Team
    `,
  },
  CREDIT_RETIREMENT_RECOGNITION: {
    id: "CREDIT_RETIREMENT_RECOGNITION",
    subject: "International Transfer Retire Request Recognised",
    html: `
        Dear {{name}},<br><br>

        Request to internationally transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} to {{country}} made by your Management Company has been recognised.<br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the international transfer retire request. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  CREDIT_RETIREMENT_NOT_RECOGNITION: {
    id: "CREDIT_RETIREMENT_NOT_RECOGNITION",
    subject: "International Transfer Retire Request Not Recognised",
    html: `
        Dear {{name}},<br><br>

        Request to internationally transfer {{credits}} credits with the serial number {{serialNumber}} from {{programmeName}} to {{country}} made by your Management Company has not been recognised.<br><br>
        Click <a href="{{pageLink}}">here</a> for more details of the international transfer retire request. <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
  ORG_REACTIVATION: {
    id: "ORG_REACTIVATION",
    subject: "Organisation Reactivated",
    html: `
        Dear <br><br>

        Your Organisation has been reactivated by the {{government}}. Your Organisation will be able to perform actions as before and all the users of the Management Company will be reactivated.  <br><br>

        Sincerely, <br>
        The Bahamas National Emission Registry Team
        `,
  },
};
