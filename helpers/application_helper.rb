module ApplicationHelper

  # Fix the bug between i18n, dynamic page and directory_indexes
  def proxy_url(path)
    if locale == I18n.default_locale
      return '/' + t('paths.projects') + '/' + path
    else
      return '/' + locale.to_s + '/' + t('paths.projects') + '/' + path
    end
  end

  def project_image(p, i, opt={})
    opt['alt'] != nil ? opt['alt'] = p.name + ' ' + opt['alt'] : p.name
    image_tag("#{p.slug}/#{i}", opt)
  end

end
