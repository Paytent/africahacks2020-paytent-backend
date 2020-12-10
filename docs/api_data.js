define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login a user",
    "name": "Login_user",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user email field</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the user password field</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User loggedin</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register a new user",
    "name": "Register_new_user",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user name field</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user email field</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the user password field</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User registered</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/requestOtp",
    "title": "Request OTP",
    "name": "Request_OTP",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization header, format [Bearer token]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OTP verified</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/verifyOtp",
    "title": "Verify OTP",
    "name": "Verify_OTP",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization header, format [Bearer token]</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>the otp sent to the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OTP verified</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/dashboard",
    "title": "Fetch user dashboard",
    "name": "fetch_user_dashboard",
    "group": "Dashboard",
    "parameter": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization header, format [Bearer token]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Dashboard fetched</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/dashboard.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/wallet/new",
    "title": "Create a new wallet",
    "name": "Create_a_wallet",
    "group": "Wallet",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The wallet name field</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>The user identifier field</p>"
          }
        ],
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization header, format [Bearer token]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Wallet created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/wallet.js",
    "groupTitle": "Wallet"
  }
] });
