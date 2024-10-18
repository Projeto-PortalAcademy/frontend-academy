import { Box, Typography } from "@mui/material";
import UserIcon from "./userIcon";

type AreaProps = {
  title: string;
  userCount: number;
  userIconColor: string;
};

export default function Area({ title, userCount, userIconColor }: AreaProps) {
  return (
    <Box p={3} borderRadius={2}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {title}
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        {Array.from({ length: userCount }).map((_, index) => (
          <UserIcon key={index} label="Estagiário(a)" color={userIconColor} />
        ))}
      </Box>
    </Box>
  );
}
