# SSO 认证课程 · 从零基础到集成单点登录

一门面向**零基础**读者的身份认证课程：从「认证 vs 授权」讲起，经 Session/Cookie 与 SSO 通用骨架，逐个吃透三大单点登录协议 —— **CAS、SAML 2.0、OIDC**，最终目标是能独立完成工作项目中的 SSO 集成与排错。

## 课程路线

| 课号 | 主题 | 状态 |
|---|---|---|
| 0001 | 认证 vs 授权：一次登录背后发生了什么（Session/Cookie、SSO 骨架、三大协议地图） | ✅ 已发布 |
| 0002 | SSO 通用骨架实战：以 CAS 走完完整时序 | ⬜ 计划 |
| 0003 | CAS 深入：TGT / TGC / ST 票据体系与单点登出 | ⬜ 计划 |
| 0004 | SAML：AuthnRequest、XML 断言与签名、元数据交换 | ⬜ 计划 |
| 0005 | OIDC：OAuth 2.0 前置 → 授权码流程 → ID Token 验签 | ⬜ 计划 |
| 0006 | 三协议对比选型 + 集成实战清单 | ⬜ 计划 |

## 目录结构

```text
├── lessons/          课程正文（自包含 HTML，每课约 10 分钟）
│   └── 0001-authn-authz-and-sso-map.html
├── reference/        参考文档（可打印速查）
│   └── auth-glossary.html      认证与 SSO 术语表
├── assets/           共享组件
│   ├── course.css               全课程统一样式
│   └── quiz.js                  交互测验组件
└── RESOURCES.md      精选学习资源（官方规范 + 高质量文档）
```

## 如何使用

1. 用浏览器打开 [`lessons/0001-authn-authz-and-sso-map.html`](lessons/0001-authn-authz-and-sso-map.html)，按顺序阅读
2. 每课末尾有即时反馈测验，请先凭记忆作答再看答案
3. 遇到陌生术语查 [`reference/auth-glossary.html`](reference/auth-glossary.html)
4. 所有课程内容基于官方协议规范与权威厂商文档，关键论断均附来源链接

## 内容依据

- [CAS Protocol 3.0 Specification · Apereo](https://apereo.github.io/cas/development/protocol/CAS-Protocol-Specification.html)
- [SAML V2.0 Technical Overview · OASIS](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
- [How OpenID Connect Works · OpenID Foundation](https://openid.net/developers/how-connect-works/)
- [The OAuth 2.0 Authorization Framework · RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)

完整清单见 [RESOURCES.md](RESOURCES.md)。

## 许可

课程内容以 [MIT License](LICENSE) 发布；引用的外部资源版权归各自所有方。
