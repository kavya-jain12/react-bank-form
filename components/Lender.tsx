import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import Question from './Question';
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
} from '@mui/material';
import { CustomButton } from './Button';
import { LenderGetExtendedArray } from './utility/LenderExtendArray';
import Success from './Success';

type Props = {
  slug: string;
};

type dataProps = {
  name: string;
  fields: [];
};

const Lender = ({ slug }: Props): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<null | dataProps>();

  const [formData, setFormData] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {},
  );

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetch(`/api/lenders/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (slug === 'bank-of-azeroth') {
            // map string values to object type
            data.fields = LenderGetExtendedArray(data.fields)
          }
          setData(data);
          setLoading(false);
        });
    }
  }, [slug]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventData = event.type === 'change' ? event.currentTarget : event.target

    const name = eventData.name
    const newValue = eventData.value

    setFormData({ [name]: newValue });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setLoading(true);

    fetch(`/api/lenders/${slug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(() => {
      setSuccess(true);
      setFormData({});
    });

    setLoading(false);
  };


  return (
    <Box
      component="div"
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
    >
      {isLoading ? <LinearProgress color="secondary" />
      : success ? <Success text={'Application Submitted'} /> 
      : (
        <>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              marginBottom: 4,
            }}
          >
            {`Welcome to ${data?.name}`}
          </Typography>

          {/* application form */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {data?.fields.map((question, index) => {
                return (
                  <Grid item xs={12} md={6} key={index}>
                    <Question
                      question={question}
                      handleChange={handleChange}
                      formData={formData}
                    />
                  </Grid>
                );
              })}
            </Grid>

            <CustomButton
              type="submit"
              variant="contained"
              size="medium"
              color="secondary"
              text='Submit Application'
            />
          </form>
        </>
      )}
    </Box>
  );
};

export default Lender;
