<?php
header("Content-Type: text/xml; charset=utf-8");

$static_urls = [
    "https://www.onething.design/",
    "https://www.onething.design/projects/",
    "https://www.onething.design/contact/",
    "https://www.onething.design/about/",
    "https://www.onething.design/ui-ux-design-services/",
    "https://www.onething.design/careers/",
    "https://www.onething.design/podcast/",
    "https://www.onething.design/blogs/",
    "https://www.onething.design/terms-conditions/",
    "https://www.onething.design/privacy-policy/",
];

$post_xml = (array) simplexml_load_file("https://dashboard.onething.design/post-sitemap.xml");
$podcast_xml = (array) simplexml_load_file("https://dashboard.onething.design/podcast-sitemap.xml");
$job_xml = (array) simplexml_load_file("https://dashboard.onething.design/jobs-sitemap.xml");

$sitemap_urls = '';

foreach($static_urls as $url) {
    $sitemap_urls .= '<url>';
    $sitemap_urls .= '<loc>'.$url.'</loc>';
    $sitemap_urls .= '</url>';
}

foreach($post_xml['url'] as $i => $item) {
    // echo $i;
    if($i > 0) {
        $xml_array_item = (array) $item;

        $url = str_replace("dashboard.onething.design", "www.onething.design", $xml_array_item['loc']);

        $sitemap_urls .= '<url>';
        $sitemap_urls .= '<loc>'.$url.'</loc>';
        $sitemap_urls .= '</url>';

        // $xml_array_item['loc']
    }
}

foreach($podcast_xml['url'] as $i => $item) {
    // echo $i;
    if($i > 0) {
        $xml_array_item = (array) $item;

        $url = str_replace("dashboard.onething.design", "www.onething.design", $xml_array_item['loc']);

        $sitemap_urls .= '<url>';
        $sitemap_urls .= '<loc>'.$url.'</loc>';
        $sitemap_urls .= '</url>';

        // $xml_array_item['loc']
    }
}

foreach($job_xml['url'] as $i => $item) {
    // echo $i;
    if($i > 0) {
        $xml_array_item = (array) $item;

        $url = str_replace("dashboard.onething.design", "www.onething.design", $xml_array_item['loc']);

        $sitemap_urls .= '<url>';
        $sitemap_urls .= '<loc>'.$url.'</loc>';
        $sitemap_urls .= '</url>';

        // $xml_array_item['loc']
    }
}

$xml_title = '<?xml version="1.0" encoding="UTF-8"?>';
$xml_main_tag = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
$xml_main_tag_end = '</urlset>';
$xml_string = $xml_title . $xml_main_tag . $sitemap_urls . $xml_main_tag_end;
echo $xml_string;
// die();
// echo "<pre>";

// print_r($post_xml['url']);


?>