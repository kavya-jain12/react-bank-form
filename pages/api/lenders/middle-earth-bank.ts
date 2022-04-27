import { NextApiRequest, NextApiResponse } from 'next';

import { LenderGetResponseExtended, LenderPostResponse } from 'lib/types';

export const middleEarthBankData: LenderGetResponseExtended = {
  name: 'Middle Earth Bank',
  fields: [
    { name: 'first_name', type: 'text', required: true },
    { name: 'last_name', type: 'text', required: true },
    { name: 'date_of_birth', type: 'date', required: true },
    { name: 'monthly_income', type: 'number', required: false },
  ],
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<LenderGetResponseExtended | LenderPostResponse>,
): void => {
  if (req.method === 'POST') {
    const decision = Math.random() > 0.3 ? 'accepted' : 'declined';
    res.status(200).json({ decision });
  } else {
    res.status(200).json(middleEarthBankData);
  }
};

export default handler;
