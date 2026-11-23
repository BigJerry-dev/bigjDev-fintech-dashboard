# BigJDev Pay

A payment gateway operations dashboard for staff and executives. Built to show how I work with money products.

**Live demo:** https://bigjdev-fintech-dashboard.pages.dev

## What it does

- **Overview:** total payment volume, net revenue, success rate and pending settlements, each with its change against the previous 30 days.
- **Volume chart:** payment volume by month, drawn from the data.
- **Settlements:** pending payouts, the next settlement time, and the split by channel (card, bank transfer, wallet).
- **Transactions:** filter by status, merchant and channel. The tab counts update with the filters.
- **Transaction details:** masked customer email, gross amount, gateway fee and net paid to the merchant. Failed payments show why they were declined. The refund button only appears on successful payments.

## How it is built

- Next.js (App Router), TypeScript and Tailwind CSS 4
- Money is stored in cents and formatted in one place, to avoid rounding errors
- Filter state lives in one parent component and is passed down to the filter bar and the list
- Times are shown in UTC so the server and the browser print the same text
- Responsive from phone to wide screens

## Run it locally

    npm install
    npm run dev

Then open http://localhost:3000.

## About the data

All merchants, customers, amounts and fees are made up for the demo. Gateway fee rules are simplified assumptions, not any real company's pricing.