import { 
  Smartphone, 
  Receipt, 
  ShoppingBag, 
  SendHorizontal,
  Wallet,
  Ticket,
  Shield
} from 'lucide-react';

export const serviceOptionsData = {
  recharge: {
    title: "Mobile & DTH Recharge",
    options: [
      {
        id: "prepaid",
        title: "Prepaid Mobile",
        description: "Recharge any prepaid mobile number"
      },
      {
        id: "postpaid",
        title: "Postpaid Bill Payment",
        description: "Pay your postpaid mobile bills"
      },
      {
        id: "dth",
        title: "DTH Recharge",
        description: "Recharge your DTH connection"
      },
      {
        id: "broadband",
        title: "Broadband Bill Payment",
        description: "Pay your broadband bills"
      }
    ]
  },
  moneyTransfer: {
    title: "Money Transfer",
    options: [
      {
        id: "upi",
        title: "UPI Payment",
        description: "Pay using UPI ID"
      },
      {
        id: "scan",
        title: "Scan & Pay",
        description: "Scan QR code to pay"
      },
      {
        id: "mobile",
        title: "Pay to Mobile",
        description: "Transfer using mobile number"
      },
      {
        id: "bank",
        title: "Bank Transfer",
        description: "Direct bank account transfer"
      }
    ]
  },
  billPayments: {
    title: "Bill Payments",
    options: [
      {
        id: "electricity",
        title: "Electricity Bill",
        description: "Pay your electricity bills"
      },
      {
        id: "water",
        title: "Water Bill",
        description: "Pay your water bills"
      },
      {
        id: "gas",
        title: "Gas Bill",
        description: "Pay your gas bills"
      },
      {
        id: "landline",
        title: "Landline Bill",
        description: "Pay your landline bills"
      }
    ]
  },
  bookings: {
    title: "Travel & Entertainment",
    options: [
      {
        id: "flight",
        title: "Flight Tickets",
        description: "Book flight tickets"
      },
      {
        id: "train",
        title: "Train Tickets",
        description: "Book train tickets"
      },
      {
        id: "bus",
        title: "Bus Tickets",
        description: "Book bus tickets"
      },
      {
        id: "movie",
        title: "Movie Tickets",
        description: "Book movie tickets"
      }
    ]
  }
};

export const mainServices = [
  {
    id: "recharge",
    icon: Smartphone,
    title: "Mobile & DTH",
    description: "Recharge prepaid, postpaid & broadband"
  },
  {
    id: "moneyTransfer",
    icon: SendHorizontal,
    title: "Money Transfer",
    description: "Quick & secure bank transfers"
  },
  {
    id: "billPayments",
    icon: Receipt,
    title: "Bill Payments",
    description: "Pay utility bills seamlessly"
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    title: "Shopping",
    description: "Shop & earn cashback rewards"
  },
  {
    id: "wallet",
    icon: Wallet,
    title: "PayOn Wallet",
    description: "Your digital payment companion"
  },
  {
    id: "bookings",
    icon: Ticket,
    title: "Bookings",
    description: "Travel & entertainment tickets"
  },
  {
    id: "financial",
    icon: Shield,
    title: "Financial Services",
    description: "Insurance & loan solutions"
  }
];