# UniVerse Landing Page — Setup & Go-Live Steps

## 1. Files to update in your project

**`app/page.tsx`** — no change needed (still imports the same 4 components).

**`components/Navbar.tsx`** — replace (Roadmap link swapped for "How it works").

**`components/Content.tsx`** — replace (Roadmap section removed, "How it works" added instead).

**`components/CallToAction.tsx`** — replace (waitlist now saves to Firebase instead of your browser).

**New file: `lib/firebase.ts`** — create a `lib` folder in your project root (same level as `app` and `components`), add this file inside it.

## 2. Install Firebase

In your terminal, inside the project folder:
```
npm install firebase
```

## 3. Connect to your existing Firebase project

Since the UniVerse app already uses Firebase, reuse the same project so you don't manage two.

1. Go to [Firebase Console](https://console.firebase.google.com) → open your UniVerse project.
2. Left sidebar → **Build → Firestore Database** → if not created yet, click **Create database** (start in production mode).
3. Go to **Project Settings** (gear icon) → **General** tab → scroll to **Your apps** → find the web app config (or click **Add app → Web** if there isn't one yet).
4. Copy the values into a new file named **`.env.local`** in your project root (use `.env.local.example` as the template — don't commit `.env.local` to GitHub).

## 4. Set Firestore security rules

So random people can add themselves to the waitlist but can't read or edit other people's emails, or spam-delete data. In Firebase Console → Firestore Database → **Rules**, use:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /waitlist/{docId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

Click **Publish**.

## 5. Test locally

```
npm run dev
```
Go to `localhost:3000`, submit the waitlist form, then check Firebase Console → Firestore Database → you should see a new `waitlist` collection with the email inside.

## 6. Go live (Vercel — free, fastest option)

1. Push your project to GitHub if it isn't already:
   ```
   git init
   git add .
   git commit -m "UniVerse landing page"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) → sign in with GitHub → import the repo.
3. Before deploying, add the same environment variables from `.env.local` under **Environment Variables** in the Vercel import screen.
4. Click **Deploy**. In about a minute you'll get a live URL like `universe-yourname.vercel.app`.

## 7. Share it

- Post on Instagram/LinkedIn: "UniVerse is live — join the waitlist" + the Vercel link
- Add the link to your Instagram bio
- Share in your WhatsApp/Discord community
