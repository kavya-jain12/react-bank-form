import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Lender from 'components/Lender';
import Error from './_error';

const lenders = ['bank-of-azeroth', 'middle-earth-bank', 'naboo-bank'];

const LenderNamePage: NextPage = () => {
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();

  // return error if page not found
  if (!lenders.find(element => element === lenderSlug))
    return <Error />;
  
  return <Lender slug={lenderSlug!}></Lender>;
};

export default LenderNamePage;
