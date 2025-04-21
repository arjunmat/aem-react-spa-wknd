package com.practice.react.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.practice.react.core.models.BannerModel;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

// Sling Model annotation
@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = { BannerModel.class, ComponentExporter.class },
        resourceType = BannerModelImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter( //Exporter annotation that serializes the model as JSON
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class BannerModelImpl implements BannerModel {

    static final String RESOURCE_TYPE = "wknd-spa-react/components/banner";

    @ValueMapValue
    private String bannerText;

    @ValueMapValue
    private String bannerAlignment;

    @ValueMapValue
    private String bannerCtaText;

    @ValueMapValue
    private String bannerCtaLink;

    @ValueMapValue
    private String bannerImage;

    @Override
    public String getBannerAlignment() {
        return StringUtils.isNotEmpty(bannerAlignment) ? bannerAlignment : "left-aligned-banner";
    }

    @Override
    public String getBannerText() {
        return bannerText;
    }

    @Override
    public String getBannerCtaText() {
        return bannerCtaText;
    }

    @Override
    public String getBannerCtaLink() {
        return bannerCtaLink;
    }

    @Override
    public String getBannerImage() {
        return bannerImage;
    }

    @Override
    public String getExportedType() {
        return BannerModelImpl.RESOURCE_TYPE;
    }
}
