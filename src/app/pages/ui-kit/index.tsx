import { StaticRoutes } from "app/AppRoutes"
import Button from "app/ui/common/Button/Button"
import ButtonIcon from "app/ui/common/Button/ButtonIcon"
import ButtonLink from "app/ui/common/Button/ButtonLink"
import Checkbox from "app/ui/common/Checkbox/Checkbox"
import Field from "app/ui/common/Field/Field"
import Icon from "app/ui/common/Icon/Icon"
import Select from "app/ui/common/Select/Select"
import SelectMultiple from "app/ui/common/Select/SelectMultiple"
import Textarea from "app/ui/common/Textarea/Textarea"
import Video from "app/ui/common/Video/Video"
import Callout from "app/ui/display/Callout/Callout"
import LoaderCover from "app/ui/display/Loader/LoaderCover"
import Notice from "app/ui/display/Notice/Notice"
import Table from "app/ui/display/Table/Table"
import FileDrop from "app/ui/input/FileDrop/FileDrop"
import Box from "app/ui/layouts/Box/Box"
import Column from "app/ui/layouts/Column/Column"
import Headings from "app/ui/layouts/Headings/Headings"
import PopupLayout from "app/ui/layouts/PopupLayout/PopupLayout"
import Row from "app/ui/layouts/Row/Row"
import Person from "app/ui/synthetic/Person/Person"
import ProgressBar from "app/ui/synthetic/ProgressBar/ProgressBar"
import SearchField from "app/ui/synthetic/SearchField/SearchField"
import Slider from "app/ui/synthetic/Slider/Slider"
import _ from "lodash"
import { CSSProperties, ReactNode, useEffect } from "react"
import { Modal } from "react-modal-global"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useLocalStorage } from "react-use"
import Price from "utils/tools/price"

import __MELIODAF__ from "./meliodaf+.jpg"

function BoxDark(props: { children: ReactNode, style?: CSSProperties }) {
  return (
    <Box style={{ background: "linear-gradient(black -100%, rebeccapurple 125%)", ...props.style }}>
      {props.children}
    </Box>
  )
}

function UIKitPage() {
  // Disallow cookies to see the notice
  const [, setCookiesAllow] = useLocalStorage("cookies-allow")
  useEffect(() => { setCookiesAllow(false) }, [])

  function openPopup() {
    Modal.open(() => (
      <PopupLayout>
        <Headings>
          <h1>Heading</h1>
          <p>Description</p>
        </Headings>
        <Button onClick={openPopup}>Show Popup</Button>
      </PopupLayout>
    ))
  }
  return (
    <div style={{ padding: "5em", display: "grid", gap: "2.5em" }}>
      <Headings>
        <h1>UI Kit</h1>
        <p>You can click, hover, focus and look ^-^</p>
      </Headings>
      <Box>
        <h2>Headings</h2>
        <Headings>
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
        </Headings>
      </Box>
      <Box>
        <h2>Icons (so far)</h2>
        <BoxDark style={{ color: "white" }}>
          <Row>
            <Icon name="chevron-down" />
            <Icon name="chevron-up" />
            <Icon name="chevron-left" />
            <Icon name="chevron-right" />
            <Icon name="bell" />
            <Icon name="home" />
            <Icon name="like" />
            <Icon name="mails" />
            <Icon name="people" />
            <Icon name="people-approve" />
            <Icon name="server" />
            <Icon name="stats" />
            <Icon name="text" />
            <Icon name="loupe" />
            <Icon name="cross-circle" />
            <Icon name="play" />
            <Icon name="download-file" />
            <Icon name="minus-circle" />
            <Icon name="plus-circle" />
            <Icon name="loading" />
            <Icon name="box-out" />
          </Row>
        </BoxDark>
      </Box>
      <Box>
        <h2>Links</h2>
        <Link to="/">Home</Link>
      </Box>
      <Box>
        <h2>Button</h2>
        <h3>Colors</h3>
        <Row alignItems="center">
          <Button color="blue">Blue</Button>
          <Button color="blue" disabled>Blue disabled</Button>
          <Button color="blue" size="small">Сохранить</Button>
          <Button color="blue" size="small">Применить рандомизацию</Button>
          <Button color="white" size="small">Сбросить фильтры</Button>
          <Button color="white" size="small" disabled>Сбросить фильтры</Button>
        </Row>
        <h3>Pending</h3>
        <Button color="dark" pending>Dark</Button>
      </Box>
      <Box>
        <h2>Button Link</h2>
        <Column>
          <ButtonLink to={StaticRoutes.UIKit}>Default</ButtonLink>
          <ButtonLink to={StaticRoutes.UIKit} color="blue" iconLeft="home">Главная</ButtonLink>
          <ButtonLink to={StaticRoutes.UIKit} color="blue" iconLeft="stats">Статистика</ButtonLink>
          <ButtonLink to={StaticRoutes.UIKit} color="blue" iconLeft="text">Рандомизация текста</ButtonLink>
          <ButtonLink to={StaticRoutes.UIKit} color="blue" iconLeft="people-approve">Парсер</ButtonLink>
          <ButtonLink to={StaticRoutes.UIKit} color="blue" iconLeft="like">Активность</ButtonLink>
          <ButtonLink to={StaticRoutes.UIKit} color="blue" iconLeft="server">Прокси</ButtonLink>
          <ButtonLink to={StaticRoutes.UIKit} color="blue" iconLeft="mails">Клонер чатов</ButtonLink>
          <ButtonLink to={StaticRoutes.UIKit} color="blue" iconLeft="people">
            Массовые подписки/отписки
          </ButtonLink>
          <ButtonLink to={StaticRoutes.UIKit} color="blue" iconLeft="like">Активность</ButtonLink>
        </Column>
      </Box>
      <Box>
        <h2>Button Icon</h2>
        <Row alignItems="center">
          <ButtonIcon name="download-file" color="blue" ariaLabel={""} />
          <ButtonIcon name="download-file" color="blue" disabled ariaLabel={""} />
          <ButtonIcon name="play" color="blue" ariaLabel={""} />
          <ButtonIcon name="play" color="blue" disabled ariaLabel={""} />
        </Row>
      </Box>
      <Box>
        <h2>Toast</h2>
        <Button onClick={() => toast.success("Your Data Has Been Reset!", { position: "bottom-center" })}>Show Toast</Button>
      </Box>
      <Box>
        <h2>Modal</h2>
        <Button onClick={openPopup}>Show Popup</Button>
      </Box>
      <Box>
        <h2>Slider</h2>
        <Slider>
          {[...Array(15)].map((_, index) => (
            <Column key={index}>
              <Headings>
                <h6>Title of the content</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc curabitur nibh blandit in. At vel dignissim neque ipsum. Proin mattis cursus rhoncus amet sed. Nunc condimentum mi ipsum id scelerisque tempus sagittis, fermentum lectus. A, in risus morbi id.
                </p>
              </Headings>
            </Column>
          ))}
        </Slider>
      </Box>
      <Box>
        <h2>Table</h2>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>FrameMuse</td>
              <td>Developer</td>
              <td>{Price.format(1000, "USD", "US")}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>FrameMuse</td>
              <td>Developer</td>
              <td>{Price.format(1000, "USD", "US")}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>FrameMuse</td>
              <td>Developer</td>
              <td>{Price.format(1000, "USD", "US")}</td>
            </tr>
          </tbody>
        </Table>
      </Box>
      <Box>
        <h2>ProgressBar</h2>
        <div style={{ width: "25em" }}><ProgressBar value={35} /></div>
      </Box>
      <Box>
        <h2>Callout</h2>
        <Callout>Plan - Job Seeker</Callout>
      </Box>
      <Box>
        <h2>Video</h2>
        <Video src="https://vod-progressive.akamaized.net/exp=1671064912~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2590%2F8%2F212952840%2F731971441.mp4~hmac=5c2e94277b8b701084f9f67c9e80c1c759ad20999ce62712abb5e1b34eea89bb/vimeo-prod-skyfire-std-us/01/2590/8/212952840/731971441.mp4?download=1&filename=plataforma_5_-_coding_bootcamp+%28720p%29.mp4" poster="/static/images/video1.jpg" />
        <h3>1 / 1.25 Aspect ratio</h3>
        <Video src="https://vod-progressive.akamaized.net/exp=1671064912~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2590%2F8%2F212952840%2F731971441.mp4~hmac=5c2e94277b8b701084f9f67c9e80c1c759ad20999ce62712abb5e1b34eea89bb/vimeo-prod-skyfire-std-us/01/2590/8/212952840/731971441.mp4?download=1&filename=plataforma_5_-_coding_bootcamp+%28720p%29.mp4" poster="/static/images/video1.jpg" aspectRatio="1.25" />
      </Box>
      <Box>
        <h2>Select</h2>
        <h3>Single</h3>
        <Select onChange={value => value}>
          <option value="Incomplete">Not completed</option>
          <option value="complete">Completed</option>
        </Select>
        <Select>
          <option value="Incomplete">Not completed</option>
          <option value="complete1">Completed</option>
          <option value="complete2">Completed</option>
          <option value="complete3">Completed</option>
          <option value="complete4">Completed</option>
          <option value="complete5">Completed</option>
          <option value="complete6">Completed</option>
          <option value="complete7">Completed</option>
          <option value="complete8">Completed</option>
          <option value="complete9">Completed</option>
          <option value="complete10">Completed</option>
          <option value="complete11">Completed</option>
          <option value="complete12">Completed</option>
          <option value="complete13">Completed</option>
          <option value="complete14">Completed</option>
          <option value="complete15">Completed</option>
          <option value="complete16">Completed</option>
          <option value="complete17">Completed</option>
          <option value="complete18">Completed</option>
          <option value="complete19">Completed</option>
        </Select>
        <h3>Multiple</h3>
        <SelectMultiple onChange={value => console.log(value)}>
          {[...Array(50)].map((_value, index) => <option value={index} key={index}>{index}</option>)}
        </SelectMultiple>
      </Box>
      <Box>
        <h2>Loader</h2>
        <Box style={{ width: "10em", background: "linear-gradient(white 0%, black 125%)" }}>
          <LoaderCover />
          <LoaderCover white />
        </Box>
      </Box>
      <Box>
        <h2>User</h2>
        <h3>Person</h3>
        <Person name="FrameMuse" bio="Developer" avatar={__MELIODAF__} />
      </Box>
      <Box>
        <h2>Notice</h2>
        <Notice
          title="You haven’t purchased a plan yet!"
          desc="You only have access to the free content, if you’d like to fully unlock all content that Algo Academy has to offer then you’ll need to purchase our full course."
          element={<ButtonLink to={StaticRoutes.Purchase}>Buy Now</ButtonLink>}
        />
      </Box>
      <Box>
        <h2>Field</h2>
        <h3>Text</h3>
        <Field placeholder="Your First Name" />
        <h3>Phone number</h3>
        <Field type="tel" placeholder="+1 (555) 000-0000">Phone number</Field>
        <h3>Disabled</h3>
        <Field type="tel" placeholder="+1 (555) 000-0000" disabled>Phone number</Field>
      </Box>
      <Box>
        <h2>Checkbox</h2>
        <Checkbox>Есть условие</Checkbox>
      </Box>
      <Box>
        <h2>Textarea</h2>
        <Textarea placeholder="Вставьте текст для рандомизации">Текст рассылки</Textarea>
      </Box>
      <Box>
        <h2>Search</h2>
        <SearchField />
        <SearchField onClean={_.noop} />
      </Box>
      <Box>
        <h2>FileDrop</h2>
        <div style={{ width: "25em" }}><FileDrop label="Загрузка аккаунтов" /></div>
        <div style={{ width: "50em" }}><FileDrop label="Загрузка аккаунтов" /></div>
        <div style={{ width: "75em" }}><FileDrop label="Загрузка аккаунтов" /></div>
        <div style={{ width: "100%" }}><FileDrop label="Загрузка аккаунтов" /></div>
      </Box>
    </div>
  )
}

export default UIKitPage
