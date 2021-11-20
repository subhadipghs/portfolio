import { Image, ImageProps } from "@chakra-ui/image";

interface Props extends ImageProps {}

export function RoundedImage(props: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      sx={{
        width: "13%",
        height: "auto",
      }}
      borderRadius="full"
      {...props}
    />
  );
}
