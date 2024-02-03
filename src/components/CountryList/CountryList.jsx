import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  const elements = countries.map(({ id, country, flag }) => (
    <GridItem key={id}>
      <img src={flag} alt={country} />
    </GridItem>
  ));
  return (
    <>
      <Grid>{elements}</Grid>
    </>
  );
};
