import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const location = useLocation();
  const back = location.state?.from ?? '/';
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCountry(countryId)
      .then(data => setCountry(data))
      .catch(console.log)
      .finally(setIsLoading(false));
  }, [countryId]);

  return (
    <Section>
      <Container>
        {country && (
          <>
            <GoBackBtn path={back}>Go back</GoBackBtn>
            <CountryInfo {...country} />
          </>
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
