// Strategy Pattern Example

// Strategy interface
interface PaymentStrategy {
    pay(amount: number): void;
}

// Concrete strategies
export class CreditCardPayment implements PaymentStrategy {
    constructor(private cardNumber: string) {}

    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card ${this.cardNumber}`);
    }
}

export class PayPalPayment implements PaymentStrategy {
    constructor(private email: string) {}

    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal account ${this.email}`);
    }
}

export class CryptoPayment implements PaymentStrategy {
    constructor(private walletId: string) {}

    pay(amount: number): void {
        console.log(`Paid ${amount} using Crypto wallet ${this.walletId}`);
    }
}

// Context
export class ShoppingCart {
    private items: { name: string; price: number }[] = [];
    private paymentStrategy?: PaymentStrategy;

    addItem(name: string, price: number): void {
        this.items.push({ name, price });
    }

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    checkout(): void {
        if (!this.paymentStrategy) {
            throw new Error("Please select a payment method");
        }

        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        this.paymentStrategy.pay(total);
        this.items = [];
    }
}

// Usage
const cart = new ShoppingCart();
cart.addItem("Book", 50);
cart.addItem("Laptop", 1500);

// Pay with credit card
cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
cart.checkout();

// Pay with PayPal
cart.addItem("Headphones", 100);
cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
cart.checkout(); 