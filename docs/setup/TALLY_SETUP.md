# Tally Form Setup Guide (GDPR Compliant)

## ✅ What You Get with Tally

- ✅ **GDPR Compliant** (built-in compliance features)
- ✅ **No account permissions** (no access to your Google account)
- ✅ **Professional forms** (beautiful, mobile-responsive)
- ✅ **Free tier** (unlimited forms, unlimited submissions)
- ✅ **Easy integration** (just add form ID)
- ✅ **Export data** (CSV, Google Sheets, etc.)

## 📋 Setup Steps

### Step 1: Create Tally Account

1. Go to [tally.so](https://tally.so)
2. Sign up (free - no credit card needed)
3. Verify your email

### Step 2: Create Your Form

1. Click **"Create form"**
2. Choose **"Start from scratch"**
3. Name it: "Interest Registration"

### Step 3: Add Form Fields

Add these fields in order:

#### Field 1: Email
- Type: **Email**
- Label: `Email address`
- Mark as **Required** ✓

#### Field 2: Interest Type
- Type: **Multiple choice**
- Label: `I'm interested in:`
- Options:
  - ○ Sponsoring conservation projects
  - ○ Listing my conservation project
- Mark as **Required** ✓

#### Field 3: GDPR Consent (CRITICAL!)
- Type: **Checkbox**
- Label: Leave empty (we'll use description)
- Description: 
```
I agree to receive emails from Grow The Wild about conservation opportunities. I understand I can unsubscribe at any time. I have read and accept the [Privacy Policy](https://growthewild.earth/privacy).
```
- Mark as **Required** ✓
- **Important**: Make sure it's NOT pre-checked

### Step 4: Customize Form Design

1. Click **"Design"** tab
2. **Brand color**: Set to `#264831` (your dark green)
3. **Button text**: Change to "Register Interest"
4. **Thank you page**: 
   - Title: "Thank you!"
   - Message: "We'll be in touch soon with updates on conservation opportunities."

### Step 5: Configure Privacy Settings

1. Click **"Settings"** tab
2. Go to **"Privacy"** section:
   - ✅ Enable **"Don't collect IP addresses"**
   - ✅ Enable **"Don't track with cookies"**
3. Go to **"Notifications"** section:
   - Enable **"Email me when someone responds"**
   - Add your email

### Step 6: Get Your Form ID

1. Click **"Publish"** button (top right)
2. Go to **"Share"** tab
3. Look at the form URL: `https://tally.so/r/`**`ABC123`**
4. Copy the **form ID** (the part after `/r/`)
   - Example: If URL is `https://tally.so/r/wMRRqL`, ID is `wMRRqL`

### Step 7: Add Form ID to Your Code

1. Open `/src/components/RegisterInterestDialog.tsx`
2. Find line ~22: `const TALLY_FORM_ID = "YOUR_TALLY_FORM_ID";`
3. Replace with your actual form ID:
   ```tsx
   const TALLY_FORM_ID = "wMRRqL"; // Your actual ID
   ```

### Step 8: Test It!

1. Run `npm run dev`
2. Click the **"I'm In"** button
3. Fill out the form and submit
4. Check your email for notification
5. Check Tally dashboard for submission

## 🎨 Optional: Advanced Customization

### Add Your Logo
1. In Tally form editor, click **"Design"**
2. Upload your logo (recommended size: 200x60px)

### Custom Domain (Pro plan)
- Host form at `forms.growthewild.earth` instead of `tally.so`

### Integrations
Connect Tally to:
- **Google Sheets** (auto-sync responses)
- **Mailchimp** (build email list)
- **Slack** (get notifications)
- **Zapier** (connect to 1000+ apps)

Go to form → **"Connect"** tab → Choose integration

## 📊 View Responses

### In Tally Dashboard
1. Go to [tally.so](https://tally.so/forms)
2. Click your form
3. See all responses in real-time

### Export Data
1. Click **"Export"** button
2. Choose format (CSV, Excel, JSON)
3. Download

### Connect to Google Sheets
1. Go to **"Connect"** tab
2. Click **"Google Sheets"**
3. Authorize Tally
4. Choose spreadsheet
5. Auto-sync enabled!

## 🔒 GDPR Compliance Checklist

Ensure your form has:
- ☑️ **Explicit consent checkbox** (required, not pre-checked)
- ☑️ **Privacy policy link** (visible and clickable)
- ☑️ **Clear purpose** ("to notify you about...")
- ☑️ **Unsubscribe info** ("I can unsubscribe anytime")
- ☑️ **No IP tracking** (disabled in Tally settings)
- ☑️ **No cookies** (disabled in Tally settings)
- ☑️ **Data export available** (Tally provides this)
- ☑️ **Data deletion available** (delete submissions in Tally)

## 🐛 Troubleshooting

### Form doesn't open
- Check that Tally script is loaded (open browser console, type `window.Tally`)
- Verify form ID is correct
- Try clearing browser cache

### "Form not found"
- Double-check form ID from Tally dashboard
- Ensure form is published (not draft)

### Popup appears but looks wrong
- Check brand color is set: `#264831`
- Verify width is 500px in code
- Try different layout option

### No email notifications
- Check Tally settings → Notifications
- Verify email address is correct
- Check spam folder

## 🚀 Ready to Deploy

Once everything works locally:

```bash
git add .
git commit -m "Integrate Tally form for interest registration"
git push
npm run deploy
```

Your Tally form will be live at growthewild.earth! 🎉

## 💰 Pricing

**Free Plan (What you get):**
- ✅ Unlimited forms
- ✅ Unlimited submissions
- ✅ All question types
- ✅ Integrations (Google Sheets, etc.)
- ✅ Export data
- ⚠️ Tally branding on form

**Pro Plan ($29/month):**
- ✅ Remove Tally branding
- ✅ Custom domain
- ✅ File uploads
- ✅ Payment collection

For now, **free plan is perfect!**
