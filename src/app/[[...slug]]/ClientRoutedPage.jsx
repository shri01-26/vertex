"use client";

import Home from "../../views/Home";
import Products from "../../views/Products";
import Solutions from "../../views/Solutions";
import Developers from "../../views/Developers";
import Partners from "../../views/Partners";
import Resources from "../../views/Resources";
import Pricing from "../../views/Pricing";
import Login from "../../views/Login";
import Signup from "../../views/Signup";
import BookDemo from "../../views/BookDemo";
import Contact from "../../views/Contact";
import ContactSales from "../../views/ContactSales";
import NotFound from "../../views/NotFound";
import RCS from "../../views/products/RCS";
import SMS from "../../views/products/SMS";
import WhatsAppBusinessApi from "../../views/products/WhatsAppBusinessApi";
import WhatsAppMarketing from "../../views/products/WhatsAppMarketing";
import WhatsAppPay from "../../views/products/WhatsAppPay";
import WhatsAppChatbot from "../../views/products/WhatsAppChatbot";
import WhatsAppBroadcast from "../../views/products/WhatsAppBroadcast";
import WhatsAppForms from "../../views/products/WhatsAppForms";
import WhatsAppButton from "../../views/products/WhatsAppButton";
import ClickToWhatsAppAds from "../../views/products/ClickToWhatsAppAds";
import CTWAAds from "../../views/products/CTWAAds";
import MessagingAPIs from "../../views/products/MessagingAPIs";
import VoiceAPIs from "../../views/products/VoiceAPIs";
import VerificationAPIs from "../../views/products/VerificationAPIs";
import EmailAPIs from "../../views/products/EmailAPIs";
import WhatsAppSuites from "../../views/products/WhatsAppSuites";
import SocialCommerceSuite from "../../views/solutions/SocialCommerceSuite";
import MarketingSuite from "../../views/solutions/MarketingSuite";
import CommunicationChannelSuite from "../../views/solutions/CommunicationChannelSuite";
import OfficeSuite from "../../views/solutions/OfficeSuite";
import CustomerRatingSuite from "../../views/solutions/CustomerRatingSuite";
import OrderShipmentSuite from "../../views/solutions/OrderShipmentSuite";
import InventorySuite from "../../views/solutions/InventorySuite";
import WarehouseSuite from "../../views/solutions/WarehouseSuite";
import WarehouseMultiVendorSuite from "../../views/solutions/WarehouseMultiVendorSuite";
import BillingSuite from "../../views/solutions/BillingSuite";
import AnalyticsSuite from "../../views/solutions/AnalyticsSuite";
import DeveloperMessaging from "../../views/developers/DeveloperMessaging";
import DeveloperVoiceVideo from "../../views/developers/DeveloperVoiceVideo";
import DeveloperEmail from "../../views/developers/DeveloperEmail";
import DeveloperVerification from "../../views/developers/DeveloperVerification";
import NumbersConnectivity from "../../views/developers/NumbersConnectivity";
import DeveloperForum from "../../views/developers/DeveloperForum";
import KnowledgeCenter from "../../views/developers/KnowledgeCenter";
import AboutPartners from "../../views/partners/AboutPartners";
import BecomePartner from "../../views/partners/BecomePartner";
import FindPartner from "../../views/partners/FindPartner";
import StrategicPartners from "../../views/partners/StrategicPartners";
import Shopify from "../../views/partners/Shopify";
import HubSpot from "../../views/partners/HubSpot";
import SAP from "../../views/partners/SAP";
import Adobe from "../../views/partners/Adobe";
import Blog from "../../views/resources/Blog";
import Guides from "../../views/resources/Guides";
import CustomerStories from "../../views/resources/CustomerStories";
import AboutUs from "../../views/company/AboutUs";
import Careers from "../../views/company/Careers";
import HelpCenter from "../../views/support/HelpCenter";
import PrivacyPolicy from "../../views/legal/PrivacyPolicy";
import TermsAndConditions from "../../views/legal/TermsAndConditions";
import RefundPolicy from "../../views/legal/RefundPolicy";
import Security from "../../views/legal/Security";
import GDPRCompliance from "../../views/legal/GDPRCompliance";
import Sitemap from "../../views/legal/Sitemap";

const routes = {
  "/": Home,
  "/products": Products,
  "/solutions": Solutions,
  "/developers": Developers,
  "/partners": Partners,
  "/resources": Resources,
  "/pricing": Pricing,
  "/login": Login,
  "/signup": Signup,
  "/book-demo": BookDemo,
  "/contact": Contact,
  "/contact-sales": ContactSales,
  "/products/rcs": RCS,
  "/products/sms": SMS,
  "/products/whatsapp-business-api": WhatsAppBusinessApi,
  "/products/whatsapp-payment": WhatsAppPay,
  "/products/whatsapp-pay": WhatsAppPay,
  "/products/whatsapp-marketing": WhatsAppMarketing,
  "/products/whatsapp-chatbot": WhatsAppChatbot,
  "/products/whatsapp-broadcast": WhatsAppBroadcast,
  "/products/whatsapp-forms": WhatsAppForms,
  "/products/whatsapp-button": WhatsAppButton,
  "/products/click-to-whatsapp-ads": ClickToWhatsAppAds,
  "/products/ctwa-ads": CTWAAds,
  "/products/messaging-apis": MessagingAPIs,
  "/products/voice-apis": VoiceAPIs,
  "/products/verification-apis": VerificationAPIs,
  "/products/email-apis": EmailAPIs,
  "/products/whatsapp-suites": WhatsAppSuites,
  "/solutions/social-commerce-suite": SocialCommerceSuite,
  "/solutions/marketing-suite": MarketingSuite,
  "/solutions/communication-channel-suite": CommunicationChannelSuite,
  "/solutions/office-suite": OfficeSuite,
  "/solutions/customer-rating-suite": CustomerRatingSuite,
  "/solutions/order-shipment-suite": OrderShipmentSuite,
  "/solutions/inventory-suite": InventorySuite,
  "/solutions/warehouse-suite": WarehouseSuite,
  "/solutions/warehouse-multi-vendor-suite": WarehouseMultiVendorSuite,
  "/solutions/billing-suite": BillingSuite,
  "/solutions/analytics-suite": AnalyticsSuite,
  "/developers/messaging": DeveloperMessaging,
  "/developers/voice-and-video": DeveloperVoiceVideo,
  "/developers/email": DeveloperEmail,
  "/developers/verification": DeveloperVerification,
  "/developers/numbers-and-connectivity": NumbersConnectivity,
  "/developers/developer-forum": DeveloperForum,
  "/developers/knowledge-center": KnowledgeCenter,
  "/partners/about-partners": AboutPartners,
  "/partners/become-a-partner": BecomePartner,
  "/partners/find-a-partner": FindPartner,
  "/partners/strategic-partners": StrategicPartners,
  "/partners/shopify": Shopify,
  "/partners/hubspot": HubSpot,
  "/partners/sap": SAP,
  "/partners/adobe": Adobe,
  "/resources/blog": Blog,
  "/resources/guides": Guides,
  "/resources/customer-stories": CustomerStories,
  "/company/about-us": AboutUs,
  "/company/careers": Careers,
  "/help-center": HelpCenter,
  "/privacy-policy": PrivacyPolicy,
  "/terms-and-conditions": TermsAndConditions,
  "/refund-policy": RefundPolicy,
  "/security": Security,
  "/gdpr-compliance": GDPRCompliance,
  "/sitemap": Sitemap,
};

export default function ClientRoutedPage({ pathname }) {
  const Page = routes[pathname] ?? NotFound;
  return <Page />;
}
