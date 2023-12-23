import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';
import { makeformatDistanceToNowDate } from 'helpers/formatDistanceToNow';

export const BlogCard = ({
  name,
  postedAt,
  poster,
  tag,
  title,
  description,
  avatar,
}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardPoster src={poster} alt="card__image" />
        </CardHeader>
        <CardBody>
          <Tag>{tag}</Tag>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <UserBox>
            <Avatar src={avatar} alt={name} />
            <UserInfo>
              <UserName>{name}</UserName>
              <Date>{makeformatDistanceToNowDate(postedAt)}</Date>
            </UserInfo>
          </UserBox>
        </CardFooter>
      </Card>
    </div>
  );
};
