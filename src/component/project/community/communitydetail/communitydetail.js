import React from "react";
import { CommentCount, CommentCountNum, ContentBox, IndexContainer,
     InfoCount, InfoText, InfoTextSpan, Line, ProfileImg, Title,
     Content, ViewCount, ViewCountNum, WriterInfo, WriterProfile, CountInfoLogo, Likelogo, CommentTitle, CommentBox, CommentProfile, CommentProfileImg, CommentWriter, Comment, LikecountSpan, Commentlogo, CommentCountSpan } from './component';


function CommunityDetail() {
    return (
        <IndexContainer>
            <ContentBox>
                <Title>이번에 처음으로 스마트 스토어에서 판매 시작</Title>
                <Line/>
                <WriterInfo>
                    <WriterProfile>
                        <ProfileImg/>
                        <InfoText>
                            뽀빠이 농장
                            <br/>
                            <InfoTextSpan>
                                공급자 회원
                            </InfoTextSpan>
                            </InfoText>
                    </WriterProfile>
                    <InfoCount>
                        <ViewCount>
                            조회수
                            <ViewCountNum>9</ViewCountNum>
                        </ViewCount>
                        <CommentCount>
                            댓글
                            <CommentCountNum>2</CommentCountNum>
                        </CommentCount>
                    </InfoCount>
                </WriterInfo>
                <Line />
                <Content>
                팜투마켓 이용해서 착한 마켓이랑 매칭 되어 처음으로 스마트 스토어에서 농산물을 판매했습니다. 처음에는 컴퓨터로 등록하는 거 자체가 너무 어려워서 하기 힘들었는데 인공지능이 도와주니까 순식간에 등록이 가능했어요. 판매자분이 친절하게 먼저 연락 주셔서 편하게 판매가 가능했습니다. 다들 이용해보세요.
                </Content>
                <CountInfoLogo>
                    <Likelogo/>
                    <LikecountSpan>9</LikecountSpan>
                    <Commentlogo/>
                    <CommentCountSpan>2</CommentCountSpan>
                </CountInfoLogo>
                <Line />
                <CommentTitle>댓글</CommentTitle>
                <CommentBox>
                    <CommentProfile>
                        <CommentProfileImg/>
                        <CommentWriter>팜투게더</CommentWriter>
                    </CommentProfile>
                    <Comment>
                        스마트 스토어 첫 판매 축하드립니다!
                    </Comment>
                </CommentBox>
                <Line />
                <CommentBox>
                    <CommentProfile>
                        <CommentProfileImg/>
                        <CommentWriter>착한마켓</CommentWriter>
                    </CommentProfile>
                    <Comment>
                        덕분에 성공적으로 판매 완료 되었습니다. 감사합니다!
                    </Comment>
                </CommentBox>
                <Line />
            </ContentBox>
        </IndexContainer>
        );
    }
    
    export default CommunityDetail;
    