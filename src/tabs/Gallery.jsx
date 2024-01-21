import { useEffect, useState } from "react";

import * as ImageService from "service/image-service";
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from "components";

export const Gallery = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLastPage, setIsLastPage] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState(null);

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

  const onToggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleImageClick = ({ large, alt }) => {
    onToggleModal();
    setDataForModal({ large, alt });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onToggleModal();
      setDataForModal(null);
    }
  };

  const elements = images.map(
    ({ id, avg_color, alt, src: { medium, large } }) => (
      <GridItem key={id} id={id}>
        <CardItem color={avg_color}>
          <img
            onClick={() => handleImageClick({ large, alt })}
            src={medium}
            alt={alt}
          />
        </CardItem>
      </GridItem>
    )
  );
  const onClick = () => {
    setPage((prev) => prev + 1);
  };

  const styles = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {images.length <= 0 && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
      <Grid>{elements} </Grid>
      {isOpen && (
        <div onClick={handleBackdropClick} style={styles}>
          {" "}
          <img
            src={dataForModal.large}
            alt={dataForModal.alt}
            width={400}
            height={360}
          />
        </div>
      )}
      {!isLastPage && <Button onClick={onClick}>Load more...</Button>}
    </>
  );
};
