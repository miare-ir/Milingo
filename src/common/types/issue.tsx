interface IssueMessage {
  id: string;
  type: string;
  created_at: string;
  sender_type: string;
  message: string;
}

interface Issue {
  id: number;
  trip_id: number;
  trip_hash_key: string;
  reported_at: Date;
  resolved_at?: Date;
  picked_by?: {
    id: number;
    pk?: number;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    user_name: string;
  };
  picked_at?: Date;
  reported_by: {
    id: number;
    pk?: number;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    user_name: string;
  };
  reporter_type: string;
  resolver_type: string;
  problem: {
    id: number;
    title: string;
  };
  description: string;
  resolve_description?: string;
  messages: IssueMessage[];
}

export default Issue;
