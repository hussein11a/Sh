// preview.js - سكريبت معاينة Netlify CMS

// استيراد الأنماط الضرورية للمعاينة
import '../styles/main.css';
import '../styles/base.css';
import '../styles/layout.css';
import '../styles/header.css';
import '../styles/services.css';
import '../styles/buttons.css';
import '../styles/responsive.css';

// تسجيل أنماط المعاينة
CMS.registerPreviewStyle("/styles/main.css");
CMS.registerPreviewStyle("/styles/base.css");
CMS.registerPreviewStyle("/styles/layout.css");
CMS.registerPreviewStyle("/styles/header.css");
CMS.registerPreviewStyle("/styles/services.css");
CMS.registerPreviewStyle("/styles/buttons.css");
CMS.registerPreviewStyle("/styles/responsive.css");

// معاينة الخدمات
const ServicePreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const image = entry.getIn(['data', 'image']);
    const bg = this.props.getAsset(image);
    
    return h('div', {className: 'service-card'},
      h('div', {className: 'service-image'},
        h('img', {src: bg.toString()})
      ),
      h('div', {className: 'service-content'},
        h('h3', {className: 'service-title'}, entry.getIn(['data', 'title'])),
        h('p', {className: 'service-description'}, entry.getIn(['data', 'description'])),
        h('a', {className: 'service-cta', href: '#'}, entry.getIn(['data', 'button_text']) || 'طلب الخدمة')
      )
    );
  }
});

// معاينة معلومات الموقع
const SiteInfoPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const logo = entry.getIn(['data', 'logo']);
    const logoUrl = this.props.getAsset(logo);
    
    return h('div', {className: 'site-preview'},
      h('div', {className: 'site-header'},
        h('div', {className: 'container'},
          h('div', {className: 'header-container'},
            h('div', {className: 'logo-container'},
              h('div', {className: 'logo'},
                h('img', {src: logoUrl.toString()})
              )
            ),
            h('div', {className: 'site-info'},
              h('h1', {className: 'site-title'}, entry.getIn(['data', 'site_name'])),
              h('p', {className: 'site-description'}, entry.getIn(['data', 'site_description']))
            )
          )
        )
      )
    );
  }
});

// معاينة معلومات الاتصال
const ContactPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    
    return h('div', {className: 'contact-info'},
      h('h2', {}, entry.getIn(['data', 'title'])),
      h('div', {className: 'contact-item'},
        h('div', {className: 'contact-icon'},
          h('i', {className: 'fas fa-phone-alt'})
        ),
        h('div', {className: 'contact-text'},
          h('h4', {}, 'رقم الهاتف'),
          h('p', {}, entry.getIn(['data', 'phone']))
        )
      ),
      h('div', {className: 'contact-item'},
        h('div', {className: 'contact-icon'},
          h('i', {className: 'fab fa-whatsapp'})
        ),
        h('div', {className: 'contact-text'},
          h('h4', {}, 'واتساب'),
          h('p', {}, entry.getIn(['data', 'whatsapp']))
        )
      ),
      h('div', {className: 'contact-item'},
        h('div', {className: 'contact-icon'},
          h('i', {className: 'fas fa-map-marker-alt'})
        ),
        h('div', {className: 'contact-text'},
          h('h4', {}, 'العنوان'),
          h('p', {}, entry.getIn(['data', 'address']))
        )
      ),
      h('div', {className: 'contact-item'},
        h('div', {className: 'contact-icon'},
          h('i', {className: 'fas fa-clock'})
        ),
        h('div', {className: 'contact-text'},
          h('h4', {}, 'ساعات العمل'),
          h('p', {}, entry.getIn(['data', 'working_hours']))
        )
      )
    );
  }
});

// معاينة تذييل الصفحة
const FooterPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    
    return h('div', {className: 'site-footer'},
      h('div', {className: 'container'},
        h('div', {className: 'footer-grid'},
          h('div', {className: 'footer-column'},
            h('h3', {}, 'عن الموقع'),
            h('p', {}, entry.getIn(['data', 'about_text']))
          ),
          h('div', {className: 'footer-column'},
            h('h3', {}, entry.getIn(['data', 'quick_links_title'])),
            h('ul', {className: 'footer-links'},
              h('li', {}, h('a', {href: '#'}, 'الرئيسية')),
              h('li', {}, h('a', {href: '#'}, 'الخدمات')),
              h('li', {}, h('a', {href: '#'}, 'اتصل بنا'))
            )
          ),
          h('div', {className: 'footer-column'},
            h('h3', {}, entry.getIn(['data', 'contact_title'])),
            h('div', {className: 'footer-contact-item'},
              h('div', {className: 'footer-contact-icon'},
                h('i', {className: 'fas fa-phone-alt'})
              ),
              h('div', {className: 'footer-contact-text'},
                h('p', {}, h('a', {href: 'tel:+966501234567'}, '+966501234567'))
              )
            )
          )
        ),
        h('div', {className: 'footer-bottom'},
          h('p', {className: 'footer-copyright'}, '© ', 
            h('span', {id: 'current-year'}, new Date().getFullYear()), 
            ' ', entry.getIn(['data', 'copyright_text'])
          )
        )
      )
    );
  }
});

// معاينة ألوان الموقع
const ColorsPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const primaryColor = entry.getIn(['data', 'primary_color']);
    const secondaryColor = entry.getIn(['data', 'secondary_color']);
    const accentColor = entry.getIn(['data', 'accent_color']);
    const darkText = entry.getIn(['data', 'dark_text']);
    const lightText = entry.getIn(['data', 'light_text']);
    const lightBg = entry.getIn(['data', 'light_bg']);
    
    const style = {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
      fontFamily: 'Cairo, sans-serif',
      direction: 'rtl'
    };
    
    const colorBlockStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    };
    
    const colorSquareStyle = {
      width: '50px',
      height: '50px',
      borderRadius: '8px',
      border: '1px solid #ddd'
    };
    
    return h('div', {style: style},
      h('h2', {}, 'معاينة نظام الألوان'),
      h('div', {style: colorBlockStyle},
        h('div', {style: {...colorSquareStyle, backgroundColor: primaryColor}}),
        h('div', {}, 
          h('h4', {}, 'اللون الرئيسي'),
          h('p', {}, primaryColor)
        )
      ),
      h('div', {style: colorBlockStyle},
        h('div', {style: {...colorSquareStyle, backgroundColor: secondaryColor}}),
        h('div', {}, 
          h('h4', {}, 'اللون الثانوي'),
          h('p', {}, secondaryColor)
        )
      ),
      h('div', {style: colorBlockStyle},
        h('div', {style: {...colorSquareStyle, backgroundColor: accentColor}}),
        h('div', {}, 
          h('h4', {}, 'لون التأكيد'),
          h('p', {}, accentColor)
        )
      ),
      h('div', {style: colorBlockStyle},
        h('div', {style: {...colorSquareStyle, backgroundColor: darkText}}),
        h('div', {}, 
          h('h4', {}, 'لون النص الداكن'),
          h('p', {}, darkText)
        )
      ),
      h('div', {style: colorBlockStyle},
        h('div', {style: {...colorSquareStyle, backgroundColor: lightText}}),
        h('div', {}, 
          h('h4', {}, 'لون النص الفاتح'),
          h('p', {}, lightText)
        )
      ),
      h('div', {style: colorBlockStyle},
        h('div', {style: {...colorSquareStyle, backgroundColor: lightBg}}),
        h('div', {}, 
          h('h4', {}, 'لون الخلفية الفاتحة'),
          h('p', {}, lightBg)
        )
      ),
      h('div', {style: {marginTop: '30px'}},
        h('h3', {style: {color: primaryColor}}, 'عنوان بلون رئيسي'),
        h('h3', {style: {color: secondaryColor}}, 'عنوان بلون ثانوي'),
        h('p', {style: {color: darkText}}, 'نص عادي بلون داكن'),
        h('div', {style: {backgroundColor: secondaryColor, padding: '15px', borderRadius: '8px', marginTop: '15px'}},
          h('p', {style: {color: lightText}}, 'نص فاتح على خلفية داكنة')
        ),
        h('div', {style: {backgroundColor: lightBg, padding: '15px', borderRadius: '8px', marginTop: '15px'}},
          h('p', {style: {color: darkText}}, 'نص داكن على خلفية فاتحة')
        ),
        h('a', {style: {color: accentColor, textDecoration: 'none', display: 'block', marginTop: '15px'}}, 'رابط بلون التأكيد')
      )
    );
  }
});

// تسجيل قوالب المعاينة
CMS.registerPreviewTemplate('services', ServicePreview);
CMS.registerPreviewTemplate('site_info', SiteInfoPreview);
CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.registerPreviewTemplate('footer', FooterPreview);
CMS.registerPreviewTemplate('colors', ColorsPreview);
