import { useAppContext } from '@hooks/context';
import { Button, Form, Input, InputNumber } from 'antd';
import React, { useEffect, useState } from 'react'
import { BsFacebook, BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import styles from './contact.module.css'
import { IContacts } from '@helper/types';

export default function Contact() {
  const context = useAppContext();

  const [contact, setContact] = useState<IContacts[]>([])
  useEffect(() => {
    if (context.dataAPI) {
      setContact(context.dataAPI.Contacts)
    }
  }, [context.dataAPI])

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!'
    }
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    console.log(values.user);
    window.open(`mailto:jeni.pukkham@gmail.com?subject=เมลล์จากคุณ${values.user.email}-เรื่อง${values.user.title}&body=${values.user.project}`)
  };



  return (
    <div className={`${styles.contact} w-full pt-[70px] h-auto overflow-hidden m-0 pb-[70px]`}>
      <div className={`text-center ${context.theme == 'dark' ? styles.title_dark : styles.title}`}>
        <h2>
          Contact me
        </h2>
        <span>
          Get in touch
        </span>
      </div>

      <div className="row pt-[20px]">
        <div className="col-lg-4 gap-y-5">
          <div className="pb-[1rem]">
            <div className={`card ${styles.bg__card} ${context.theme == 'dark' ? styles.bg__card__dark : ''}`}>
              <div className={`${context.theme == 'dark' ? styles.card__body__dark : styles.card__body} card-body text-center`}>
                <div className={`flex justify-content-center w-full mb-[5px] ${context.theme == 'dark' ? styles.icon__dark : ''}`}>
                  <BsFacebook className="w-[2rem] h-[2rem]" />
                </div>
                <h3>{contact.find(arg => arg.PlatFormSlug == 'facebook')?.PlatFormName ?? ""}</h3>
                <a target="_blank" rel="noopener noreferrer" href={contact.find(arg => arg.PlatFormSlug == 'facebook')?.PlatFormLink ?? ""}>
                  <p>{`Write to me ->`}</p>
                </a>
              </div>
            </div>
          </div>

          <div className="pb-[1rem]">
            <div className={`card ${styles.bg__card} ${context.theme == 'dark' ? styles.bg__card__dark : ''}`}>
              <div className={`${context.theme == 'dark' ? styles.card__body__dark : styles.card__body} card-body text-center`}>
                <div className={`flex justify-content-center w-full mb-[5px] ${context.theme == 'dark' ? styles.icon__dark : ''}`}>
                  <BsLinkedin className="w-[2rem] h-[2rem]" />
                </div>
                <h3>{contact.find(arg => arg.PlatFormSlug == 'linkin')?.PlatFormName ?? ""}</h3>
                <a target="_blank" rel="noopener noreferrer" href={contact.find(arg => arg.PlatFormSlug == 'linkin')?.PlatFormLink ?? ""}>
                  <p>{`Write to me ->`}</p>
                </a>
              </div>
            </div>
          </div>

          <div className="pb-[1rem]">
            <div className={`card ${styles.bg__card} ${context.theme == 'dark' ? styles.bg__card__dark : ''}`}>
              <div className={`${context.theme == 'dark' ? styles.card__body__dark : styles.card__body} card-body text-center`}>
                <div className={`flex justify-content-center w-full mb-[5px] ${context.theme == 'dark' ? styles.icon__dark : ''}`}>
                  <MdEmail className="w-[2rem] h-[2rem]" />
                </div>
                <h3>{contact.find(arg => arg.PlatFormSlug == 'email')?.PlatFormName ?? ""}</h3>
                <a href={contact.find(arg => arg.PlatFormSlug == 'email')?.PlatFormLink ?? ""}
                  className=""
                  target="_blank" rel="noopener noreferrer">
                  <p>{`Write to me ->`}</p>
                </a>
              </div>
            </div>
          </div>

          <div className="pb-[1rem]">
            <div className={`card ${styles.bg__card} ${context.theme == 'dark' ? styles.bg__card__dark : ''}`}>
              <div className={`${context.theme == 'dark' ? styles.card__body__dark : styles.card__body} card-body text-center`}>
                <div className={`flex justify-content-center w-full mb-[5px] ${context.theme == 'dark' ? styles.icon__dark : ''}`}>
                  <BsFillTelephoneFill className="w-[2rem] h-[2rem]" />
                </div>
                <h3>{contact.find(arg => arg.PlatFormSlug == 'phone')?.PlatFormName ?? ""}</h3>
                <a href={`tel:+66${contact.find(arg => arg.PlatFormSlug == 'phone')?.PlatFormLink ?? ""}`}>
                  <p>{`Call me now ->`}</p>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-8">
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }, { required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'title']} label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'project']} label="Project" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className={`row m-0 w-100 gap-y-4 pt-[70px] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}>
        <div className="col-lg-6 flex align-items-center gap-2 justify-content-center">
          <FaMapMarkerAlt className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          <span className="text-[18px]">Chiang mai,Thailand.</span>
        </div>

        <div className="col-lg-6 flex align-items-center gap-x-2 justify-content-center">
          <span className={`${styles.follow} text-[18px]`}>Follow me :</span>
          <a href={contact.find(arg => arg.PlatFormSlug == 'facebook')?.PlatFormLink ?? ""} className="" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          </a>
          <a href={contact.find(arg => arg.PlatFormSlug == 'linkin')?.PlatFormLink ?? ""} className="" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          </a>
          <a href={contact.find(arg => arg.PlatFormSlug == 'github')?.PlatFormLink ?? ""} className="" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          </a>
          <a href={contact.find(arg => arg.PlatFormSlug == 'linkin')?.PlatFormLink ?? ""} className="" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          </a>
        </div>
      </div>
    </div >
  )
}
