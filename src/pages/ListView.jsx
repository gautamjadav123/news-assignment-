import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Pagination,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../redux/postSlice";

const ITEMS_PER_PAGE = 6;

const ListView = () => {
  const { posts, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Box p={2} sx={{ minHeight: "80vh", m: "auto" }}>
      {paginatedPosts.map((post, index) => (
        <Card
          key={post.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: 1,
            marginBottom: 2,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "#fff",
            ml: 10,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCE..."
              sx={{ width: 60, height: 60, marginRight: 2 }}
            />
            <CardContent sx={{ padding: "0 !important" }}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                noWrap
                sx={{ maxWidth: 270 }}
              >
                {post.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                noWrap
                sx={{ maxWidth: 280 }}
              >
                {post.description}
              </Typography>
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ marginTop: 0.5 }}
              >
                Mon, 21 Dec 2020 14:57 GMT
              </Typography>
            </CardContent>
          </Box>
          <IconButton
            sx={{
              color: "red",
              border: "1px solid #eee",
              background: "#fff",
              "&:hover": { background: "#ffe6e6" },
              marginRight: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Card>
      ))}

      {/* Pagination */}
      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(posts.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ListView;
