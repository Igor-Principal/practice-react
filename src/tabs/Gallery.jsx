import { useEffect, useState } from "react";

import * as ImageService from "service/image-service";
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from "components";

export const Gallery = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const onSubmit = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;
    const fn = async () => {
      const result = await ImageService.getImages(query, page);
      setImages(result.data.photos);
    };
    fn();
  }, [query, page]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <Text textAlign="center">Sorry. There are no images ... 😭</Text>
    </>
  );
};
