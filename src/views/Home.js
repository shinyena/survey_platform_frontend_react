import React, { useState } from 'react'
import {
  CImage,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCard,
  CCardTitle,
  CCardText,
  CCardBody,
  CCardImage,
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
} from '@coreui/react'
const image = require("../assets/images/react.jpg")

const Home = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CRow className="mb-3">
        <CCol>
          <CCard>
            <CCardImage orientation="top" src={image}></CCardImage>
            <CCardBody>
              <CCardTitle>설문 생성하기</CCardTitle>
              <CCardText>새로운 설문을 생성해보세요.</CCardText>
              <CButton href="#" onClick={() => setVisible(!visible)}>Create New Survey</CButton>
              <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                  <CModalTitle>설문 생성하기</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CForm method="post" action="/#/survey">
                    <div className="mb-3">
                      <CFormLabel>설문 이름</CFormLabel>
                      <CFormInput type="text" placeholder="설문 이름을 입력하세요"/>
                    </div>
                    <div className="mb-3">
                      <CFormLabel>설문 분류 선택</CFormLabel>
                      <CFormSelect>
                        <option value="1">학교</option>
                        <option value="2">기업</option>
                        <option value="3">연애</option>
                        <option value="4">사업</option>
                        <option value="5">취미</option>
                      </CFormSelect>
                    </div>
                    <div className="mb-3">
                      <CFormLabel>설문 공개 설정</CFormLabel>
                      <CFormSelect>
                        <option value="1">전체 공개</option>
                        <option value="2">그룹 공개</option>
                        <option value="3">비공개</option>
                      </CFormSelect>
                    </div>
                  </CForm>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                  <CButton color="primary" type="submit">Create</CButton>
                </CModalFooter>
              </CModal>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardImage orientation="top" src={image}></CCardImage>
            <CCardBody>
              <CCardTitle>설문 생성함</CCardTitle>
              <CCardText>생성한 설문 목록을 볼 수 있습니다.</CCardText>
              <CButton href="/#/survey/makeList">Go Created List</CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardImage orientation="top" src={image}></CCardImage>
            <CCardBody>
              <CCardTitle>설문 참여함</CCardTitle>
              <CCardText>참여한 설문 목록을 볼 수 있습니다.</CCardText>
              <CButton href="/#/survey/prtcpList">Go Participated List</CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCarousel controls indicators>
          <CCarouselItem>
            <CButton href="/#/survey/detail" color="light">
              <CImage className="d-block w-100" src={image} alt="slide 1" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>학교</h5>
                <p>동아리 신청 설문조사 입니다.</p>
              </CCarouselCaption>
            </CButton>
          </CCarouselItem>
          <CCarouselItem>
              <CButton href="/#/survey/detail" color="light">
                <CImage className="d-block w-100" src={image} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>기업</h5>
                  <p>선호기업 설문조사 입니다.</p>
                </CCarouselCaption>
              </CButton>
          </CCarouselItem>
          <CCarouselItem>
            <CButton href="/#/survey/detail" color="light">
              <CImage className="d-block w-100" src={image} alt="slide 3" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>연애</h5>
                <p>연애 설문조사 입니다.</p>
              </CCarouselCaption>
            </CButton>
          </CCarouselItem>
          <CCarouselItem>
            <CButton href="/#/survey/detail" color="light">
              <CImage className="d-block w-100" src={image} alt="slide 4" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>사업</h5>
                <p>자영업 주문서 설문조사 입니다.</p>
              </CCarouselCaption>
            </CButton>
          </CCarouselItem>
          <CCarouselItem>
            <CButton href="/#/survey/detail" color="light">
              <CImage className="d-block w-100" src={image} alt="slide 5" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>취미</h5>
                <p>좋아하는 여행지 설문조사 입니다.</p>
              </CCarouselCaption>
            </CButton>
          </CCarouselItem>
        </CCarousel>
      </CRow>
    </>
  )
}

export default Home