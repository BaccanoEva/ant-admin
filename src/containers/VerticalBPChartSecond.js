import React from 'react';
import { Row, Col, Card } from 'antd';
import D3VerticalBPChartSecond from '../components/charts/D3VerticalBPChartSecond';

class VerticalBPChartSecond extends React.Component {
    render() {

        const data = [['nodejs/node', 'nodejs/node', 200], ['appium/appium', 'nodejs/node', 3], ['mxstbr/react-boilerplate', 'nodejs/node', 2], ['docker/docker', 'kubernetes/kubernetes', 244], ['vector-im/riot-web', 'kubernetes/kubernetes', 6], ['amalgam8/registry', 'kubernetes/kubernetes', 2], ['Microsoft/vscode', 'Microsoft/vscode', 187], ['driftyco/ionic', 'Microsoft/vscode', 81], ['meteor/meteor', 'Microsoft/vscode', 23], ['SickRage/SickRage', 'coala/coala', 225], ['ros/rosdistro', 'coala/coala', 27], ['galaxyproject/galaxy', 'coala/coala', 5], ['vega/vega-lite', 'coala/coala', 3], ['Homebrew/legacy-homebrew', 'Homebrew/homebrew-core', 82], ['firedrakeproject/firedrake', 'Homebrew/homebrew-core', 6], ['alphagov/paas-cf', 'Homebrew/homebrew-core', 3], ['rails/rails', 'apple/swift', 88], ['apple/swift', 'apple/swift', 4], ['spring-projects/spring-session', 'openzipkin/zipkin-java', 11], ['openzipkin/zipkin-java', 'openzipkin/zipkin-java', 4], ['Chisel-Team/Chisel', 'mezz/JustEnoughItems', 26], ['mozilla/addons-server', 'mozilla/fxa-content-server', 18], ['ros2/rclcpp', 'ros2/rmw_fastrtps', 17], ['mlibrary/umrdr', 'projecthydra/sufia', 13], ['TerriaJS/terriajs', 'TerriaJS/terriajs', 12], ['mapbox/mapbox-gl-native', 'mapbox/mapbox-gl-native', 11], ['sanctuary-js/sanctuary', 'sanctuary-js/sanctuary', 11], ['quintel/etmodel', 'quintel/etmodel', 5], ['RobotLocomotion/drake', 'RobotLocomotion/drake', 5], ['OPM/opm-simulators', 'OPM/opm-simulators', 5], ['hbz/nwbib', 'lobid/lodmill', 4], ['couchbase/couchbase-lite-java-core', 'couchbase/couchbase-lite-java-core', 4], ['MegaMek/megameklab', 'MegaMek/megameklab', 4], ['zenodo/zenodo', 'zenodo/zenodo', 4], ['JMRI/JMRI', 'JMRI/JMRI', 3], ['getgauge/gauge', 'getgauge/gauge', 3], ['geneontology/amigo', 'geneontology/noctua', 3], ['home-assistant/home-assistant', 'home-assistant/home-assistant', 3], ['CartoDB/cartodb', 'CartoDB/cartodb', 3], ['keybase/client', 'keybase/client', 3], ['ckan/ckan', 'ckan/ckan', 3], ['spring-cloud/spring-cloud-stream-modules', 'spring-cloud/spring-cloud-stream', 3], ['FormidableLabs/victory', 'FormidableLabs/victory-chart', 3], ['hpcugent/easybuild-easyconfigs', 'hpcugent/easybuild-easyconfigs', 3], ['flamingo-geocms/flamingo', 'flamingo-geocms/flamingo', 3], ['apiaryio/drafter', 'apiaryio/drafter', 3], ['ceylon/ceylon-ide-eclipse', 'ceylon/ceylon', 2], ['getnikola/plugins', 'getnikola/plugins', 2], ['snarfed/bridgy', 'snarfed/bridgy', 2], ['ngageoint/hootenanny-ui', 'ngageoint/hootenanny', 2], ['opencog/opencog', 'opencog/opencog', 2], ['mosra/magnum', 'mosra/magnum-examples', 2], ['genome/civic-client', 'genome/civic-server', 2], ['zaproxy/zaproxy', 'zaproxy/zaproxy', 2], ['18F/openFEC-web-app', '18F/openFEC-web-app', 2], ['Zarel/Pokemon-Showdown', 'Zarel/Pokemon-Showdown', 2], ['certtools/intelmq', 'certtools/intelmq', 2], ['c2corg/v6_ui', 'c2corg/v6_ui', 2], ['pagespeed/ngx_pagespeed', 'pagespeed/ngx_pagespeed', 2], ['convexopt/gpkit', 'PyCQA/pylint', 2], ['GoogleCloudPlatform/DataflowJavaSDK', 'GoogleCloudPlatform/DataflowJavaSDK', 2], ['18F/web-design-standards', 'department-of-veterans-affairs/vets-website', 2], ['uclouvain/osis', 'uclouvain/osis', 2], ['ehcache/ehcache3', 'ehcache/ehcache3', 2], ['martinisgroup/servers', 'labrad/pylabrad', 2], ['xia2/xia2', 'xia2/xia2', 2], ['davidjsherman/aseba', 'aseba-community/aseba', 2], ['katharsis-project/katharsis-spring', 'katharsis-project/katharsis-core', 2], ['loot/loot', 'loot/loot', 2], ['duniter/duniter', 'duniter/duniter', 2], ['cclib/cclib', 'cclib/cclib', 2], ['sensu/sensu', 'sensu/sensu', 2], ['IsraelHikingMap/Map', 'graphhopper/graphhopper', 2], ['pulp/pulp', 'pulp/pulp_rpm', 2], ['eclipse/smarthome', 'openhab/openhab2', 2], ['rpm-software-management/dnf-plugins-core', 'rpm-software-management/dnf', 2], ['sul-dlss/stacks', 'sul-dlss/exhibits', 2], ['ubcgif/em', 'simpeg/simpeg', 2], ['msr-consulting/exscalabar_server', 'msr-consulting/exscalabar', 2], ['edouarda/brigand', 'edouarda/brigand', 2]];
 
        return (
            <div className="gutter-example virtical-bp-chart-second-demo">
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="2016上到2016下" bordered={false}>
                                <D3VerticalBPChartSecond data={data} />
                            </Card>
                        </div>
                    </Col>
                </Row>             
            </div>
        )
    }
}

export default VerticalBPChartSecond;