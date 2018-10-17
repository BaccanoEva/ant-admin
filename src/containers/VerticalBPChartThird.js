import React from 'react';
import { Row, Col, Card } from 'antd';
import D3VerticalBPChartThird from '../components/charts/D3VerticalBPChartThird';

class VerticalBPChartThird extends React.Component {
    render() {
       const data = [['travis-ci/travis-build', 'nodejs/node', 3], ['w3c/aria', 'nodejs/node', 3], ['grommet/grommet', 'nodejs/node', 2], ['jenkinsci/blueocean-plugin', 'nodejs/node', 2], ['coala/coala', 'conda/conda', 189], ['ckan/ckan', 'conda/conda', 3], ['kytos/napps-server', 'conda/conda', 3], ['Juniper/py-junos-eznc', 'conda/conda', 2], ['Microsoft/vscode', 'ionic-team/ionic', 224], ['dojo/widgets', 'ionic-team/ionic', 12], ['keybase/client', 'Homebrew/homebrew-core', 34], ['hpcugent/easybuild-easyconfigs', 'Homebrew/homebrew-core', 4], ['trilinos/Trilinos', 'Homebrew/homebrew-core', 3], ['topojson/topojson', 'Homebrew/homebrew-core', 2], ['streamlink/streamlink-twitch-gui', 'Homebrew/homebrew-core', 2], ['mapbox/mapbox-gl-native', 'RobotLocomotion/drake', 77], ['RobotLocomotion/drake', 'RobotLocomotion/drake', 27], ['RobotLocomotion/drake', 'ros/rosdistro', 27], ['ros2/rmw_fastrtps', 'ros/rosdistro', 7], ['openzipkin/zipkin-java', 'spring-projects/spring-boot', 22], ['reactor/reactor-core', 'spring-projects/spring-boot', 2], ['kubernetes/kubernetes', 'golang/dep', 282], ['mezz/JustEnoughItems', 'SpongePowered/SpongeForge', 35], ['mozilla/fxa-content-server', 'mozilla/addons-server', 23], ['odoo/odoo', 'odoo/odoo', 19], ['zenodo/zenodo', 'inspirehep/inspire-next', 12], ['sanctuary-js/sanctuary', 'sanctuary-js/sanctuary', 12], ['getsentry/sentry', 'celery/celery', 11], ['department-of-veterans-affairs/vets-website', '18F/web-design-standards', 11], ['janus-project/janusproject', 'eclipse/xtext-extras', 8], ['projecthydra/sufia', 'samvera-labs/hyku', 6], ['OPM/opm-simulators', 'OPM/opm-simulators', 6], ['droolsjbpm/drools', 'kiegroup/kie-wb-common', 6], ['lobid/lodmill', 'hbz/lobid-resources', 5], ['openhab/openhab2', 'openhab/openhab2-addons', 5], ['openvstorage/framework', 'openvstorage/framework', 5], ['ckeditor/ckeditor5', 'ckeditor/ckeditor5-dev', 4], ['edx/edx-platform', 'edx/edx-platform', 4], ['quintel/etmodel', 'quintel/etmodel', 4], ['RackHD/on-http', 'RackHD/on-tasks', 4], ['cms-sw/cmssw', 'cms-sw/cmssw', 3], ['JMRI/JMRI', 'JMRI/JMRI', 3], ['crowbar/crowbar-core', 'sap-oc/crowbar-openstack', 3], ['certtools/intelmq', 'certtools/intelmq', 3], ['openaddresses/openaddresses', 'openaddresses/openaddresses', 3], ['zaproxy/zaproxy', 'zaproxy/zaproxy', 3], ['uclouvain/osis', 'uclouvain/osis', 3], ['autotest/tp-qemu', 'avocado-framework/avocado-vt', 3], ['TerriaJS/terriajs', 'TerriaJS/nationalmap', 3], ['c2corg/v6_ui', 'c2corg/v6_ui', 3], ['eclipse/vert.x', 'eclipse/vert.x', 3], ['pre-commit/pre-commit-hooks', 'pre-commit/pre-commit-hooks', 3], ['simpeg/simpeg', 'simpeg/simpeg', 3], ['getgauge/gauge', 'getgauge/gauge', 2], ['getnikola/plugins', 'getnikola/nikola', 2], ['lxde/pcmanfm-qt', 'lxde/pcmanfm-qt', 2], ['ArduPilot/ardupilot', 'PX4/Firmware', 2], ['ilastik/ilastik', 'ilastik/ilastik', 2], ['frappe/erpnext', 'frappe/erpnext', 2], ['flamingo-geocms/flamingo', 'flamingo-geocms/flamingo', 2], ['duniter/duniter', 'duniter/duniter', 2], ['lxde/qtermwidget', 'lxde/qterminal', 2], ['Valloric/YouCompleteMe', 'Valloric/YouCompleteMe', 2], ['KhronosGroup/Vulkan-LoaderAndValidationLayers', 'LunarG/VulkanTools', 2], ['informatics-isi-edu/chaise', 'informatics-isi-edu/ermrestjs', 2], ['LLK/scratch-blocks', 'LLK/scratch-gui', 2], ['Zarel/Pokemon-Showdown', 'Zarel/Pokemon-Showdown-Client', 2], ['OHDSI/Atlas', 'OHDSI/Atlas', 2], ['noflo/noflo-ui', 'vmware/vic', 2], ['globusonline/globus-cli', 'globus/globus-sdk-python', 2], ['codalab/codalab-worksheets', 'codalab/codalab-worksheets', 2], ['ualbertalib/HydraNorth', 'ualbertalib/HydraNorth', 2], ['dcos/dcos', 'dcos/dcos', 2], ['n8rzz/atc', 'n8rzz/atc', 2], ['kontalk/androidclient', 'nextcloud/jsxc.nextcloud', 2], ['RobotLocomotion/drake', 'RobotLocomotion/drake', 13.5], ['RobotLocomotion/drake', 'ros/rosdistro', 13.5]];

 
        return (
            <div className="gutter-example virtical-bp-chart-third-demo">
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="2015下到2016上" bordered={false}>
                                <D3VerticalBPChartThird data={data} />
                            </Card>
                        </div>
                    </Col>
                </Row>             
            </div>
        )
    }
}

export default VerticalBPChartThird;