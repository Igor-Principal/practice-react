import { useState, useEffect } from 'react';
import { Container, CountryList, Heading, Loader, Section } from 'components';
import { fetchByRegion } from 'service/country-service';

export const Home = () => {
  const [euroRegionList, setEuroRegionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fn = async () => {
      try {
        const euroList = await fetchByRegion('europe');
        setEuroRegionList(euroList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fn();
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {!loading && <CountryList countries={euroRegionList} />}
        {error && <Heading />}
      </Container>
    </Section>
  );
};
