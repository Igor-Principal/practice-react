import { useEffect, useState } from "react";

import * as ImageService from "service/image-service";
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from "components";

export const Gallery = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLastPage, setIsLastPage] = useState(true);

  const onSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const fn = async () => {
      const result = await ImageService.getImages(query, page);
      setImages((prev) => [...prev, ...result.data.photos]);
      setIsLastPage(page >= Math.ceil(result.data.total_results / 15));
    };
    fn();
  }, [query, page]);

  const elements = images.map(
    ({ id, avg_color, alt, src: { medium, large } }) => (
      <GridItem key={id} id={id}>
        <CardItem color={avg_color}>
          <img src={medium} alt={alt} />
        </CardItem>
      </GridItem>
    )
  );
  const onClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {images.length <= 0 && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
      <Grid>{elements}</Grid>
      {!isLastPage && <Button onClick={onClick}>Load more...</Button>}
    </>
  );
};
