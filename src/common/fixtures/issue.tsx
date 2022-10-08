const issue = {
  id: 0,
  trip_id: 0,
  trip_hash_key: '85372269-03e3-4e3b-af46-1471daec0d9c',
  problem: {
    id: 0,
    title: 'مقصد اشتباه',
  },
  reported_at: new Date(),
  resolved_at: null,
  picked_by: {
    id: 165,
    pk: 0,
    first_name: 'زهرا',
    last_name: 'میرکاظمی',
    is_staff: false,
    user_name: 'میرکاظمی',
  },
  reported_by: {
    id: 65,
    pk: 0,
    first_name: 'ایرج',
    last_name: 'پیروزبخت',
    is_staff: false,
    user_name: '',
  },
  reporter_type: 'staff',
  resolver_type: 'staff',
  description: 'توضیحات ایشیو',
  messages: [
    {
      id: '9ad24b31-8f1e-4c5e-b488-b715b2825792',
      created_at: '2021-11-02T14:48:18+0330',
      sender_type: 'staff',
      type: 'text',
      message: 'سلام! پشتیبان میاره هستم. ',
    },
    {
      id: '9ad24b31-8f1e-4c5e-b488-b715b2825796',
      created_at: '2021-11-02T14:49:18+0330',
      sender_type: 'client',
      type: 'text',
      message: 'علیک سلام کلاینت هستم',
    },
    {
      id: '9ad24b31-8f1e-4c5e-b488-b715b2825797',
      created_at: '2021-11-02T14:50:18+0330',
      sender_type: 'staff',
      type: 'text',
      message: 'مشکلی داری؟',
    },
    {
      id: '9ad24b31-8f1e-4c5e-b488-b715b2825790',
      created_at: '2021-11-02T15:00:18+0330',
      sender_type: 'client',
      type: 'text',
      message: 'نه مشکلی نیست',
    },
  ],
};

const issues = [
  { ...issue },
  {
    ...issue,
    id: 1,
    problem: { id: 1, title: 'تایتل' },
    resolved_at: '2021-10-02T14:48:18+0330',
    reporter_type: 'driver',
  },
  {
    ...issue,
    id: 2,
    problem: { id: 2, title: 'برای این سفر کوریر پیدا کن' },
    reporter_type: 'client',
  },
];

export default issues;
