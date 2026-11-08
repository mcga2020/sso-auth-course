# SSO / 身份认证 Resources

## Knowledge

### 入门基础（中文优先，第 1 课已引用）
- [什么是 SSO？| 单点登录的工作方式 – Cloudflare 学习中心（中文）](https://www.cloudflare-cn.com/learning/access-management/what-is-sso/)
  用「酒吧门口查一次证件」类比讲 SSO 原理与好处（强密码、集中 MFA、凭据不散落）。末尾有少量产品推广，忽略即可。用例：SSO 零基础入门首选。
- [使用 HTTP Cookie – MDN（中文）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/Cookies)
  权威说明 HTTP 无状态、Cookie 用于会话管理、Domain 属性与跨域限制。用例：Session/Cookie 机制、Cookie 属性（Secure、HttpOnly、SameSite）。
- [RFC 6749 – The OAuth 2.0 Authorization Framework（IETF）](https://datatracker.ietf.org/doc/html/rfc6749)
  OAuth 2.0 原始标准，标题即点明它是「授权」框架。用例：讲 OAuth vs OIDC 区别时的一手依据。
- [CAS 用户手册 · Introduction – Apereo（官方）](https://apereo.atlassian.net/wiki/spaces/CASUM/pages/103261420/Introduction)
  CAS 的历史：「2001 年在耶鲁大学启动，最初由 Shawn Bayern 开发」，2005 年 12 月成为 Jasig 项目（后并入 Apereo）。用例：CAS 背景知识。（Wikipedia 在当前网络下无法访问，故用官方手册代替。）

### 官方协议规范（最高信任，查细节用）
- [CAS Protocol 3.0 Specification（Apereo 官方）](https://apereo.github.io/cas/development/protocol/CAS-Protocol-Specification.html)
  CAS 票据协议的权威定义：service 参数、ST/TGT/TGC、/serviceValidate 校验端点。用例：核对 CAS 对接细节、字段含义。
- [SAML V2.0 Technical Overview（OASIS 官方，HTML）](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
  OASIS 官方的 SAML 2.0 技术概览：IdP/SP 角色、断言内容（认证/属性/授权决策三类声明）、各种 SSO 流程。用例：比规范本身易读，学 SAML 的官方入口。
- [SAML 2.0 Core 规范（OASIS 标准，2005 年 3 月，PDF）](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf)
  SAML 2.0 规范正文（Assertions and Protocols）。用例：查断言结构、Conditions、NameID 格式等细节。
- [OpenID Connect Core 1.0（OpenID Foundation）](https://openid.net/specs/openid-connect-core-1_0.html)
  OIDC 核心规范：ID Token、UserInfo、所有授权流程。用例：核对 OIDC 集成细节。
- [How OpenID Connect Works（OpenID Foundation 官方入门）](https://openid.net/developers/how-connect-works/)
  最权威的 OIDC 一页式解释，说明 OIDC 是 OAuth 2.0 之上的身份层。用例：第一手入门材料。

### 高质量厂商文档（讲得比规范好懂）
- [Understanding SAML – Okta Developer](https://developer.okta.com/docs/concepts/saml/)
  IdP/SP 角色、SP 发起与 IdP 发起两种流程的清晰解释。用例：学 SAML 流程首选。
- [SAML authentication explained – Duo](https://duo.com/learn/saml-authentication)
  SAML 如何集中身份管理。用例：企业视角理解 SAML 价值。
- [什么是 SAML？– Cloudflare 学习中心（中文）](https://www.cloudflare-cn.com/learning/access-management/what-is-saml/)
  简洁的 SAML 概念页。用例：快速复习。
- [Apereo CAS 官网](https://apereo.github.io/cas/)
  企业级开源 SSO / IdP 项目主页与文档入口。用例：了解 CAS 生态与部署形态。

## Wisdom (Communities)

- [Stack Overflow `cas` 标签](https://stackoverflow.com/questions/tagged/cas)
  CAS 集成报错的高质量问答沉淀。用例：对接报错时搜索。
- [Stack Overflow `saml` 标签](https://stackoverflow.com/questions/tagged/saml)
  SAML 断言校验、证书问题排查。用例：`invalid signature` 类错误必搜。
- [Stack Overflow `openid-connect` 标签](https://stackoverflow.com/questions/tagged/openid-connect)
  OIDC 集成实战问答。用例：token 校验、scope 问题。

## Gaps
- 尚未确认用户公司实际采用哪个协议（CAS / SAML / OIDC）。确认后应补充对应协议的 SDK/框架实战资源（如 Spring Security、Keycloak 文档）。
- 缺少中文高质量系统性资源，后续遇到可补充。
