
/**
 * Type definitions for the Pi Network SDK
 */

// Define the Pi Network SDK types
export type Scope = "username" | "payments" | "wallet_address";

export type AuthResult = {
  accessToken: string;
  user: {
    uid: string;
    username: string;
    roles?: string[];
  };
};

export type PaymentDTO = {
  identifier: string;
  user_uid: string;
  amount: number;
  memo: string;
  metadata: Record<string, any>;
  from_address: string;
  to_address: string;
  direction: Direction;
  created_at: string;
  network: AppNetwork;
  status: {
    developer_approved: boolean;
    transaction_verified: boolean;
    developer_completed: boolean;
    cancelled: boolean;
    user_cancelled: boolean;
  };
  transaction: null | {
    txid: string;
    verified: boolean;
    _link: string;
  };
};

export type Direction = "user_to_app" | "app_to_user";
export type AppNetwork = "Pi Network" | "Pi Testnet";

export type PaymentData = {
  amount: number;
  memo: string;
  metadata: Record<string, any>;
};

export type PaymentCallbacks = {
  onReadyForServerApproval: (paymentId: string) => void;
  onReadyForServerCompletion: (paymentId: string, txid: string) => void;
  onCancel: (paymentId: string) => void;
  onError: (error: Error, payment?: PaymentDTO) => void;
};

// Enum for subscription tiers
export enum SubscriptionTier {
  INDIVIDUAL = 'individual',
  SMALL_BUSINESS = 'small-business',
  ORGANIZATION = 'organization',
}

// Note: We're removing the global interface declaration as it's already defined in global.d.ts
