import { Box, Typography, Link, List, ListItem } from '@mui/material';
import { NextPage } from 'next';

type Props = {
  name: string;
  slug: string;
};

const HomePage: NextPage = () => {
  const lenders = [
    { name: 'Bank of Azeroth', slug: 'bank-of-azeroth' },
    { name: 'Middle Earth Bank', slug: 'middle-earth-bank' },
    { name: 'Naboo Bank', slug: 'naboo-bank' },
  ];

  return (
    <Box
      component="form"
      sx={{
        padding: 4,
        marginY: 4,
        boxShadow: 4,
        borderTop: 8,
        borderRadius: 2,
        marginX: [2, 'auto'],
        borderColor: '#673AB7',
        backgroundColor: '#FFF',
        width: ['auto', '500px', '700px'],
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" component="h5" sx={{ paddingX: 2 }}>
        Choose your Bank
      </Typography>
      <List>
        {lenders.map((lender: Props) => (
          <ListItem key={lender.name}>
            <Link data-testid={lender.slug} href={`/${lender.slug}`}>
              {lender.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HomePage;
