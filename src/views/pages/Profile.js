import React, {useState} from 'react'
import {
  CButton,
  CCard, CCardHeader, CCardBody, CCardFooter,
  CForm, CFormInput, CFormLabel, CFormSelect, CFormCheck,
  CInputGroup,
  CInputGroupText, CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilAt,
  cilCheck,
  cilFactory,
  cilHappy,
  cilHeart,
  cilImage,
  cilLockLocked,
  cilPhone,
  cilUser
} from '@coreui/icons'
import axios from "axios";
import apiConfig from "../../lib/apiConfig";
import {useSelector} from "react-redux";

const Profile = () => {
  const { user } = useSelector(({user})=> ({user:user.user}));
  const userId = user.info.userId
  const [jobList, setJobList] = useState([]);

  useState(async () => {
    await axios.get(apiConfig.jobList)
      .then((response) => {
        setJobList(response.data)
      })
  })

  useState( async () => {
    await axios.get(
      apiConfig.userDetail,
      {params:{user_id: userId}},
      {headers: {"Content-Type": "multipart/form-data"}}
    ).then((response) => {
      setName(response.data.name)
      setJob(response.data.job)
      setAge(response.data.age)
      setGender(response.data.gender)
      setPhone(response.data.phone)
      setMailAddr(response.data.mailAddr)
    })
  })

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [mailAddr, setMailAddr] = useState("");
  // const [acceptPhone, setAcceptPhone] = useState(true);
  // const [acceptMailAddr, setAcceptM ailAddr] = useState(true);
  const [userPwd, setUserPwd] = useState("");

  const userInfo = new FormData();
  userInfo.append("userId", userId);
  userInfo.append("name", name);
  userInfo.append("job", job);
  userInfo.append("age", age);
  userInfo.append("gender", gender);
  userInfo.append("phone", phone);
  userInfo.append("mailAddr", mailAddr);
  userInfo.append("userRole", "USER");
  userInfo.append("userPwd", userPwd);
  userInfo.append("status", 0);
  userInfo.append("statusInfo", "statusInfo");


  const modifyUser = () => {
    axios.post(
      apiConfig.modifyUser,
      userInfo
    ).then((response) => {
      console.log(response)
      setAlertColor("success")
      setAlertMessage(response.data)
      setAlertVisible(true)
      window.location.reload()

    }).catch((error) => {
      setAlertColor("danger")
      setAlertMessage(error.response.data)
      setAlertVisible(true)
    })
  }

  const [alertVisible, setAlertVisible] = useState(false)
  const [alertColor, setAlertColor] = useState("")
  const [alertMessage, setAlertMessage] = useState("")

  return (
    <>
      <CAlert
        visible={alertVisible}
        color={alertColor}
        dismissible
        onClose={() => setAlertVisible(false)}
      >{alertMessage}</CAlert>

      <CCard className="mx-4">
        <CCardHeader><strong>?????? ??????</strong><small> ?????? ????????? ????????? ??? ????????????. ???????????? ????????? ???????????? ????????? ????????? ???????????????.</small></CCardHeader>
        <CCardBody className="p-4">
          <CForm>

            <CFormLabel>?????????</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilCheck} />
              </CInputGroupText>
              <CFormInput
                autoComplete="username"
                type="text"
                placeholder="???????????? ???????????????"
                value={userId}
              />
            </CInputGroup>


            <CFormLabel>??????</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilUser} />
              </CInputGroupText>
              <CFormInput
                type="text"
                placeholder="????????? ???????????????"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
              />
            </CInputGroup>

            <div className="d-flex justify-content-between">
              <CFormLabel>????????? ??????</CFormLabel>
              <strong><CFormCheck readOnly checked label="????????????"/></strong>
            </div>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilAt} />
              </CInputGroupText>
              <CFormInput
                type="email"
                placeholder="???????????? ???????????????"
                value={mailAddr}
                onChange={(e) => {setMailAddr(e.target.value)}}
              />
            </CInputGroup>

            <CFormLabel>????????????</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilLockLocked} />
              </CInputGroupText>
              <CFormInput
                autoComplete="current-password"
                type="password"
                placeholder="??????????????? ???????????????"
                value={userPwd}
                onChange={(e) => {setUserPwd(e.target.value)}}
              />
            </CInputGroup>

            <CFormLabel>???????????? ??????</CFormLabel>
            <CInputGroup className="mb-4">
              <CInputGroupText>
                <CIcon icon={cilLockLocked} />
              </CInputGroupText>
              <CFormInput
                type="password"
                placeholder="???????????? ????????? ???????????????"/>
            </CInputGroup>

            <CFormLabel>????????? ?????????</CFormLabel>
            <CInputGroup className="mb-4">
              <CInputGroupText>
                <CIcon icon={cilImage} />
              </CInputGroupText>
              <CFormInput
                type="file"
                onChange={(e) => {userInfo.append('userImage', e.target.files[0])}}
              />
            </CInputGroup>

            <div className="d-flex justify-content-between">
              <CFormLabel>????????? ??????</CFormLabel>
              <strong><CFormCheck readOnly checked label="????????????"/></strong>
            </div>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilPhone} />
              </CInputGroupText>
              <CFormInput
                type="tel"
                placeholder="????????? ????????? ???????????????"
                value={phone}
                onChange={(e) => {setPhone(e.target.value)}}
              />
            </CInputGroup>



            <CFormLabel>??????</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilHappy} />
              </CInputGroupText>
              <CFormInput
                type="number"
                placeholder="????????? ???????????????"
                value={age}
                onChange={(e) => {setAge(e.target.value)}}
              />
            </CInputGroup>

            <CFormLabel>??????</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilHeart} />
              </CInputGroupText>
              <CFormSelect onChange={(e) => {setGender(e.target.value)}}>
                <option>????????? ???????????????</option>
                <option value="W" selected={gender == "W"?true:false}>??????</option>
                <option value="M" selected={gender == "M"?true:false}>??????</option>
              </CFormSelect>
            </CInputGroup>

            <CFormLabel>??????</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilFactory} />
              </CInputGroupText>
              <CFormSelect onChange={(e) => {setJob(e.target.value)}}>
                <option>????????? ???????????????</option>
                {jobList.map((jobItem) => (
                  <option
                    key={jobItem.userJobId}
                    value={jobItem.content}
                    selected={job == jobItem.content?true:false}
                    >
                    {jobItem.content}
                  </option>
                ))}
              </CFormSelect>
            </CInputGroup>

          </CForm>
          <div className="d-flex justify-content-start">
            <CButton className="mt-3" variant="outline" color="success" onClick={modifyUser}>Modify</CButton>
            &nbsp;
            <CButton className="mt-3" variant="outline" color="danger">Delete</CButton>
          </div>
        </CCardBody>
      </CCard>


    </>



  )
}

export default Profile
