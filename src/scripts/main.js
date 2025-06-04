// main.js - الملف الرئيسي لاستدعاء جميع الوظائف

import { initUI } from './ui.js';

/**
 * دالة تهيئة الموقع
 */
function initSite() {
  try {
    // تحديث السنة الحالية في حقوق النشر
    updateCopyrightYear();
    
    // تهيئة واجهة المستخدم
    initUI();
    
    console.log('تم تهيئة الموقع بنجاح');
  } catch (error) {
    console.error('خطأ في تهيئة الموقع:', error.message);
  }
}

/**
 * دالة تحديث السنة الحالية في حقوق النشر
 */
function updateCopyrightYear() {
  try {
    const currentYearElement = document.getElementById('current-year');
    
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  } catch (error) {
    console.error('خطأ في تحديث السنة الحالية:', error.message);
  }
}

// استدعاء دالة تهيئة الموقع بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', initSite);

console.log('تم تحميل الملف الرئيسي بنجاح');
