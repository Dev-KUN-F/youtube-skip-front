import React, { useState } from "react";
import axios from "axios";
import * as S from "./styles"; // styles.js에서 가져오기

const YouTubeProcessor = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSummary("");

    try {
      const response = await axios.post(
        "http://localhost:5000/youtube/process",
        { videoUrl }
      );
      setSummary(response.data.summary);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // 줄바꿈 문자 (\n)을 <br> 태그로 변환
  const formatSummary = (text) => {
    return text.replace(/\n/g, "<br>");
  };

  return (
    <S.Container>
      <h1>YouTube Skip</h1>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="videoUrl">YouTube Video URL:</S.Label>
        <S.Input
          type="text"
          id="videoUrl"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
        <S.Button type="submit">Process</S.Button>
      </S.Form>
      {loading && <S.Message>Processing...</S.Message>}
      {error && <S.Message error>{error}</S.Message>}
      {summary && (
        <S.SummaryContainer>
          <h2>요약</h2>
          <S.SummaryText
            dangerouslySetInnerHTML={{
              __html: formatSummary(summary),
            }}
          ></S.SummaryText>
        </S.SummaryContainer>
      )}
    </S.Container>
  );
};

export default YouTubeProcessor;
