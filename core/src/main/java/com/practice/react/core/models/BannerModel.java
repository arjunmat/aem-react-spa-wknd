package com.practice.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface BannerModel extends ComponentExporter {
    public String getBannerAlignment();
    public String getBannerText();
    public String getBannerCtaText();
    public String getBannerCtaLink();
    public String getBannerImage();
}
