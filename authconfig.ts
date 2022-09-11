const aws = {
    aws_project_region: "ap-southeast-1",
    aws_cognito_identity_pool_id: "ap-southeast-1:a5db8180-6856-4bc4-9c8f-d8f6e09bea66",
    aws_cognito_region: "ap-southeast-1",
    aws_user_pools_id: "ap-southeast-1_Klyd4cUdp",
    aws_user_pools_web_client_id: "5dkmm65r7jl117t7md73vreqrs",
    oauth: {
        domain: "wl173ra0tw17-staging.auth.ap-southeast-1.amazoncognito.com",
        scope: ["phone", "email", "openid", "profile", "aws.cognito.signin.user.admin"],
        redirectSignIn: "http://localhost:3000/",
        redirectSignOut: "http://localhost:3000/",
        responseType: "code",
    },
    federationTarget: "COGNITO_USER_POOLS",
    aws_cognito_username_attributes: ["EMAIL"],
    aws_cognito_social_providers: ["GOOGLE"],
    aws_cognito_signup_attributes: [],
    aws_cognito_mfa_configuration: "OFF",
    aws_cognito_mfa_types: ["SMS"],
    aws_cognito_password_protection_settings: {
        passwordPolicyMinLength: 8,
        passwordPolicyCharacters: ["REQUIRES_LOWERCASE", "REQUIRES_NUMBERS", "REQUIRES_SYMBOLS", "REQUIRES_UPPERCASE"],
    },
    aws_cognito_verification_mechanisms: ["EMAIL"],
};

export default aws;
